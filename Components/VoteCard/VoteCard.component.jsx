import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./VoteCard.styles";
const width = Dimensions.get("window").width;

export default function VoteCard({ item, removeCard, swipedDirection }) {
  const [show, setShow] = useState(true);
  let side;
  const [vote, setVote] = useState(null)
  //Card must be in the center first
  const [positionX, setPositionX] = useState(new Animated.Value(0));
  //Showcases in which direction the card must be swiped
  let swipeDirection = "";
  //Card must be visible initially before the swipe.
  let cardOpacity = new Animated.Value(1);
  // Card rotation values
  let cardRotaion = positionX.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-20deg", "0deg", "20deg"],
  });

  // Movement responder aka PanResponder
  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => false,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dx: positionX }], {
      useNativeDriver: false,
      // Check which direction the gesture is being done
      listener: (evt, gestureState) => {
        if (gestureState.dx > width - 250) {
          swipeDirection = "Right";
        } else if (gestureState.dx < -width + 250) {
          swipeDirection = "Left";
        }

        if(gestureState.dx > 50){
          side = gestureState.dx;
        } else if(gestureState.dx < 50){
          side = gestureState.dx;

        }
      },
    }),

    onPanResponderRelease: (evt, gestureState) => {
      const gestureReset =
        gestureState.dx < width - 150 && gestureState.dx > -width + 150;
      const toValue = gestureState.dx > width - 150 ? width : -width;

      gestureReset
        ? Animated.spring(positionX, {
            toValue: 0,
            speed: 5,
            bounciness: 10,
            useNativeDriver: false,
          }).start()
        : Animated.parallel([
            Animated.timing(positionX, {
              toValue,
              duration: 200,
              useNativeDriver: false,
            }),
            Animated.timing(cardOpacity, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false,
            }),
          ]).start(() => {
            swipedDirection(swipeDirection);
            removeCard();
          });
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 6000);
  }, []);

  return (
    <>
        <Animated.View
      style={[
        styles.container,
        {
          opacity: cardOpacity,
          transform: [{ translateX: positionX }, { rotate: cardRotaion }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <ImageBackground
        source={{
          uri: item.image,
        }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.profileImage,
            }}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </View>

        {positionX < 110 && (
          <View style={styles.noContainer}>
            <Text style={styles.no}>No</Text>
          </View>
        )}

            {
              side > 50 
              ?
              <View style={styles.noContainer}>
                <Text style={styles.no}>No</Text>
              </View>
              :
              side > 50
              ?
              <View style={styles.yesContainer}>
                <Text style={styles.yes}>Yes</Text>
              </View>
              :
              null
            }

        {show && (
          <>
            <View style={styles.ribbon}>
              <View style={styles.noContainer}>
                <Text style={styles.no}>No</Text>
              </View>
              <Text style={styles.label}>Swipe directions</Text>
              <View style={styles.yesContainer}>
                <Text style={styles.yes}>Yes</Text>
              </View>
            </View>
          </>
        )}
      </ImageBackground>
      
    </Animated.View>
    </>
  );
}
