import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Voting.styles";
import Buttn from "../../Components/Button/Button.component";
import VoteCard from "../../Components/VoteCard/VoteCard.component";
import Swiper from "react-native-deck-swiper";
import { Colors } from "../../Utils/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextStyles } from "../../Utils/Text";
import { addProjectsToDataBase } from "../../services/firebase.services";
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
      votes: 24,
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
      votes: 12,
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
      votes: 0,
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
      votes: 0,
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
      votes: 37,
    },
  ];
  const [cardsDone, setCardsDone] = useState(false);
  const [data, setData] = useState(tattooEntries);
  const [direction, setDirection] = useState();
  const [votes, setVotes] = useState(null)

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
    }
  };

  const swipedDirection = (swipeDirection, votes) => {
    setDirection(swipeDirection);
    // setVotes(votes +1)
    console.log("Hey", votes)
    console.log(swipeDirection)
    // if(swipeDirection === "Left"){
    //   console.log(votes)
    // }

    if(swipeDirection == "Left"){
      setVotes(votes -1)
      console.log(swipeDirection)
    } else if(swipeDirection == "Right"){
      setVotes(votes +1)
      console.log(votes)
    }

  
  };


  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          paddingHorizontal: 27,
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
        }}
      >
        {index === data.length ? null : (
          <Text style={[TextStyles.headingTwo]}>{data[index].category}</Text>
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
                swipedDirection={(direction) => swipedDirection(direction,item.votes)}
              />
            ))}
          </View>

          <Text style={[TextStyles.headingThree, {paddingLeft: 20, paddingTop: 20}]}>{data[index].artworkName}</Text>
          <View style={styles.artContainer}>
            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"person"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={TextStyles.body}>{data[index].artist}</Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"language"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={TextStyles.body}>
                {data[index].artistWebsite}
              </Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"photo-camera"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={TextStyles.body}>
                {data[index].artistInstagram}
              </Text>
            </View>

            <View style={styles.artistInfo}>
              <MaterialIcons
                name={"phone"}
                size={15}
                color={Colors.secondary}
              />
              <Text style={TextStyles.body}>
                {data[index].artistNumber}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
