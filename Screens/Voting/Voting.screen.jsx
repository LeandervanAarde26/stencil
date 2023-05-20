import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Voting.styles";
import Buttn from "../../Components/Button/Button.component";
import VoteCard from "../../Components/VoteCard/VoteCard.component";
import Swiper from "react-native-deck-swiper";
import { Colors } from "../../Utils/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function Voting() {
  const tattooEntries = [
    {
      id: "1",
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Lidush_Habib_01.jpg/120px-Lidush_Habib_01.jpg",
      artist: "John Smith",
      artistImage: "https://example.com/artist1.jpg",
      artistInstagram: "https://instagram.com/artist1",
      artistWebsite: "https://artist1website.com",
      artistNumber: "1234567890",
      artworkName: "Dragon Sleeve",
    },
    {
      id: "2",
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Trip_to_edinburg_and_picture_with_tan_sri_noor_hisham.jpg/90px-Trip_to_edinburg_and_picture_with_tan_sri_noor_hisham.jpg",
      artist: "Emily Johnson",
      artistImage: "https://example.com/artist2.jpg",
      artistInstagram: "https://instagram.com/artist2",
      artistWebsite: "https://artist2website.com",
      artistNumber: "9876543210",
      artworkName: "Floral Watercolor",
    },
    {
      id: "3",
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/%D8%AC%D8%A7%D8%B3%D9%85_%D9%85%D8%AD%D9%85%D8%AF_%D8%AC%D8%B9%D9%81%D8%B1.jpg/120px-%D8%AC%D8%A7%D8%B3%D9%85_%D9%85%D8%AD%D9%85%D8%AF_%D8%AC%D8%B9%D9%81%D8%B1.jpg",
      artist: "David Thompson",
      artistImage: "https://example.com/artist3.jpg",
      artistInstagram: "https://instagram.com/artist3",
      artistWebsite: "https://artist3website.com",
      artistNumber: "1112223333",
      artworkName: "Geometric Mandala",
    },
    {
      id: "4",
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D8%A7%D9%84%D8%B4%D9%85%D8%B1%D9%8A.jpg/90px-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D8%A7%D9%84%D8%B4%D9%85%D8%B1%D9%8A.jpg",
      artist: "Sarah Davis",
      artistImage: "https://example.com/artist4.jpg",
      artistInstagram: "https://instagram.com/artist4",
      artistWebsite: "https://artist4website.com",
      artistNumber: "4445556666",
      artworkName: "Japanese Koi Fish",
    },
    {
      id: "5",
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3_%D8%A8%D9%8A%D8%B1%D8%AF%D8%A7%D8%AF_%D9%85%D8%AD%D9%85%D8%AF.jpg/120px-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3_%D8%A8%D9%8A%D8%B1%D8%AF%D8%A7%D8%AF_%D9%85%D8%AD%D9%85%D8%AF.jpg",
      artist: "Michael Brown",
      artistImage: "https://example.com/artist5.jpg",
      artistInstagram: "https://instagram.com/artist5",
      artistWebsite: "https://artist5website.com",
      artistNumber: "7778889999",
      artworkName: "Neo-Traditional Rose",
    },
  ];
  const [cardsDone, setCardsDone] = useState(false);
  const [data, setData] = useState(tattooEntries);
  const [direction, setDirection] = useState(null);

  const removeCard = (id) => {
    // data.splice(
    //   data.findIndex((item) => item.id == id),
    //   1
    // );
    // setData(data);
    // console.log(data.length);
    // if (data.length == 0) {
    //   setCardsDone(true);
    // }
  };

  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    if (index === data.length) {
      setCardsDone(true);
    } else {
      setIndex(index + 1);
      console.log(index);
    }
  };

  const swipedDirection = (swipeDirection) => {
    setDirection(swipeDirection);
    console.log(swipeDirection);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          paddingHorizontal: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
        }}
      >
        <Text style={styles.heading}>Neo-Traditional</Text>
        <Buttn
          label={"Leaderboard"}
          buttonType={"secondary"}
          icon={"leaderboard"}
        />
      </View>

      {index === data.length ? (
        <View style={styles.done}>
          <Image source={require("../../assets/testerImage.png")} />
          <Text style={styles.noMoreEntries}>End of the line!</Text>
          <Text style={styles.subText}>
            There are no more entries in Neo Traditional, come back later to
            explore more tattoos!
          </Text>

          <Buttn buttonType={"primaryOutline"} label={"explore categories"} />
        </View>
      ) : (
        <>

<View style={styles.innerContainer}>
          {data.map((item, index) => (

              <VoteCard
                key={index}
                item={item}
                index={index}
                removeCard={() => changeIndex()}
                swipedDirection={swipedDirection}
              />
       
          ))}
        </View>


          <Text style={styles.artworkTitle}>{data[index].artworkName}</Text>
          <View style={styles.artContainer}>
            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"person"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={styles.artistInformation}>{data[index].artist}</Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"language"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={styles.artistInformation}>
                {data[index].artistWebsite}
              </Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"photo-camera"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={styles.artistInformation}>
                {data[index].artistInstagram}
              </Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"phone"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={styles.artistInformation}>
                {data[index].artistNumber}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
