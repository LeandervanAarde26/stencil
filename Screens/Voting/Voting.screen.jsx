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
import { getAllEntries } from "../../services/firestore.db";
export default function Voting() {
  const [cardsDone, setCardsDone] = useState(false);
  // const [data, setData] = useState(tattooEntries);
  const [direction, setDirection] = useState();
  const [votes, setVotes] = useState(null);
  const [entries, setEntries] = useState([]);

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
    if (index === entries.length) {
      setCardsDone(true);
    } else {
      setIndex(index + 1);
    }
  };

  const swipedDirection = (swipeDirection, votes) => {
    setDirection(swipeDirection);
    // setVotes(votes +1)
    console.log("Hey", votes);
    console.log(swipeDirection);
    // if(swipeDirection === "Left"){
    //   console.log(votes)
    // }

    if (swipeDirection == "Left") {
      setVotes(votes - 1);
      console.log(swipeDirection);
    } else if (swipeDirection == "Right") {
      setVotes(votes + 1);
      console.log(votes);
    }
  };

  useEffect(() => {
    const getUserEntries = async () => {
      const allEntries = await getAllEntries();
   
      setEntries(allEntries);
    };
    getUserEntries();
  }, []);

  console.log("====================================");
  console.log(entries);
  console.log("====================================");
  console.log("====================================");
  console.log(entries[0]);

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
        {index === entries.length ? null : (
          <Text style={[TextStyles.smallText]}>
            {entries[index].competition}
          </Text>
        )}
        <Buttn
          label={"Leaderboard"}
          buttonType={"secondary"}
          icon={"leaderboard"}
        />
      </View>

      {index === entries.length ? (
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
            {entries  &&
            entries.map((item, index) => (
              <VoteCard
                key={item.id}
                item={item}
                index={entries.length - index - 1}
                removeCard={() => changeIndex()}
                swipedDirection={(direction) =>
                  swipedDirection(direction, item.votes)
                }
              />
            )).reverse()}
          </View>

          <Text
            style={[
              TextStyles.headingThree,
              { paddingLeft: 20, paddingTop: 20 },
            ]}
          >
            {entries[index].name}
          </Text>
        </>
      )}
    </View>
  );
}