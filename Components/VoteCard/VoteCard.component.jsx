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

export default function VoteCard({ uri }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 6000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: uri,
        }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sou2je-12rojsfvl.jpg/114px-Sou2je-12rojsfvl.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </View>

      
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
    </View>
  );
}
