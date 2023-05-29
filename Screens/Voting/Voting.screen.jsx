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
      uri: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png",
      artist: "John Smith",
      artistImage: "https://example.com/artist1.jpg",
      artistInstagram: "https://instagram.com/artist1",
      artistWebsite: "https://artist1website.com",
      artistNumber: "1234567890",
      artworkName: "Dragon Sleeve",
      category: "Japanese",
    },
    {
      id: "2",
      uri: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png",
      artist: "Emily Johnson",
      artistImage: "https://example.com/artist2.jpg",
      artistInstagram: "https://instagram.com/artist2",
      artistWebsite: "https://artist2website.com",
      artistNumber: "9876543210",
      artworkName: "Floral Watercolor",
      category: "Watercolor",
    },
    {
      id: "3",
      uri: "https://png.pngtree.com/element_our/sm/20180515/sm_930d88ac10fafcb133c4b2027446648b.png",
      artist: "David Thompson",
      artistImage: "https://example.com/artist3.jpg",
      artistInstagram: "https://instagram.com/artist3",
      artistWebsite: "https://artist3website.com",
      artistNumber: "1112223333",
      artworkName: "Geometric Mandala",
      category: "Neo-Traditional",
    },
    {
      id: "4",
      uri: "https://www.pngfind.com/pngs/m/184-1848579_free-png-wolf-girl-tattoo-designs-png-image.png",
      artist: "Sarah Davis",
      artistImage: "https://example.com/artist4.jpg",
      artistInstagram: "https://instagram.com/artist4",
      artistWebsite: "https://artist4website.com",
      artistNumber: "4445556666",
      artworkName: "Japanese Koi Fish",
      category: "Japanese",
    },
    {
      id: "5",
      uri: "https://png.pngtree.com/png-clipart/20190217/ourmid/pngtree-tribal-lizard-iguana-temporary-tattoo-png-image_3997150.png",
      artist: "Michael Brown",
      artistImage: "https://example.com/artist5.jpg",
      artistInstagram: "https://instagram.com/artist5",
      artistWebsite: "https://artist5website.com",
      artistNumber: "7778889999",
      artworkName: "Neo-Traditional Rose",
      category: "Neo-Traditional",
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
        {index === data.length ? null : (
          <Text style={styles.heading}>{data[index].category}</Text>
        )}

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
