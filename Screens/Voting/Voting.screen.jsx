import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Voting.styles";
import Buttn from "../../Components/Button/Button.component";
import VoteCard from "../../Components/VoteCard/VoteCard.component";
import Swiper from "react-native-deck-swiper";
import { Colors } from "../../Utils/Colors";
export default function Voting() {
  const things = [
    {
      name: 'Item one',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9_%D9%82%D8%AF%D9%8A%D8%B1_%D8%A3%D9%8A%D9%88%D8%A8_%D8%A8%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%81%D8%A7%D8%B1_%D8%A8%D8%A7%D9%84%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1.jpg/96px-%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9_%D9%82%D8%AF%D9%8A%D8%B1_%D8%A3%D9%8A%D9%88%D8%A8_%D8%A8%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%81%D8%A7%D8%B1_%D8%A8%D8%A7%D9%84%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1.jpg'
    },
    {
      name: 'Item two',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D8%A7%DB%8C%D9%84%DB%8C%D8%A7%D8%B8%D8%A7%D9%87%D8%B1%DB%8C.jpg/120px-%D8%A7%DB%8C%D9%84%DB%8C%D8%A7%D8%B8%D8%A7%D9%87%D8%B1%DB%8C.jpg'
    },
    {
      name: 'Item three',
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Adjahoui.jpg/104px-Adjahoui.jpg'
    },
  ] 

  const [index, setIndex] = useState(0);
  const onSwiped = () =>{
    setIndex((index +1) % things.length)
  }
  return (
    <View style={styles.container}>
      <View style={{height: 60, paddingHorizontal: 30}}>
        <Buttn
          label={"View Leaderboard"}
          buttonType={"secondary"}
          icon={"leaderboard"}
        />
      </View>
   
      {/* <Text style={styles.heading}>Art Work Name</Text> */}
      <View style={styles.innerContainer}>

      <Swiper
        backgroundColor="transparent"    
       cards={things}
          cardIndex={index}
          renderCard={card => <VoteCard {...card}></VoteCard>}
          disableTopSwipe
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          onSwiper={onSwiped}
          stackSize={3}
          stackScale={10}
          stackSeperation={14}
          infinite
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  paddingHorizontal: 10,
                  borderColor: Colors.Danger,
                  borderWidth: 3, 
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9,
                  color: Colors.Danger,
                  fontSize: 18,
                  fontWeight: 700
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  paddingHorizontal: 10,
                  borderColor: Colors.Success,
                  borderWidth: 3, 
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9,
                  color: Colors.Success,
                  fontSize: 18,
                  fontWeight: 700
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }}}
        />
      </View>

      {/* <View style={styles.informationContainer}></View> */}
    </View>
  );
}
