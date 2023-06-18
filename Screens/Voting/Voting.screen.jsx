import { Image, Text, View, Linking } from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { styles } from "./Voting.styles";
import Buttn from "../../Components/Button/Button.component";
import VoteCard from "../../Components/VoteCard/VoteCard.component";
import Swiper from "react-native-deck-swiper";
import { Colors } from "../../Utils/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { addProjectsToDataBase } from "../../services/firebase.services";
import {
  getAllEntries,
  getAllTesterEntries,
  testFunction,
  voteOnCompetition,
} from "../../services/firestore.db";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { TextStyles } from "../../Utils/Text";
import { FirebaseContext } from "../../store/FirebaseUser.context";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../store/pushNotifications";
import * as Notifications from "expo-notifications";

export default function Voting({ route, navigation }) {
  const [cardsDone, setCardsDone] = useState(false);
  const user = useContext(FirebaseContext);
  const userId = user.userId;
  // const [data, setData] = useState(tattooEntries);
  const [direction, setDirection] = useState();
  const [votes, setVotes] = useState(100);
  const [entries, setEntries] = useState([]);
  const isFocused = useIsFocused();
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
  const [pushNotToken, setPushNotToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setPushNotToken(token));
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);

        responseListener.current =
          Notifications.addNotificationResponseReceivedListener((response) => {
            console.log(response);
          });

        return () => {
          Notifications.removeNotificationSubscription(
            notificationListener.current
          );
          Notifications.removeNotificationSubscription(
            responseListener.current
          );
        };
      });
  }, []);

  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    if (index === entries.length) {
      setCardsDone(true);
    } else {
      setIndex(index + 1);
    }
  };

  const viewLeaderBoard = () => {
    navigation.navigate("Leaderboard",{compCat: route.params?.entries});
    console.log("registered click");
  };

  const swipedDirection = async (swipeDirection, id) => {
    setDirection(swipeDirection);
    const lockVote = await voteOnCompetition(userId, id, swipeDirection);
  };

  console.log(entries);

  // Get all entries and set it there
  useFocusEffect(
    useCallback(() => {
      const getUserEntries = async () => {
        const allEntries = await getAllEntries();
        let nextStep = allEntries.filter((document) => {
          return !document.voters.includes(userId);
        });

        let filteredEntries = nextStep;
        if (
          route.params?.entries !== null &&
          route.params?.entries !== undefined
        ) {
          filteredEntries = allEntries.filter(
            (entry) => entry.competition === route.params.entries
          );
        }
        setEntries(filteredEntries);
      };

      getUserEntries();
    }, [route.params?.entries])
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      navigation.setParams({ entries: null });
    });
    return unsubscribe;
  }, [navigation]);




  useEffect(() => {
    if (!isFocused) {
      console.log("Left the screen");
    }
  }, [isFocused, route.params?.entries, entries]);

  const onPressHandler = () => {
    console.log(entries[index].user["email"]);
    try {
      const email = entries[index].user["email"];
      const subject = encodeURIComponent("Tattoos");
      const body = encodeURIComponent("Hi Leander,");
      Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    } catch (error) {
      // Handle the error here
      console.error("Failed to open email:", error);
    }
  };

  const callPressHandler = () => {
    try {
      const phoneNumber = entries[index].user["contactDetails"];
      Linking.openURL(`tel:${phoneNumber}`);
    } catch (error) {
      // Handle the error here
      console.error("Failed to open email:", error);
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
        {index === entries.length ? null : (
          <>
            <Text style={[TextStyles.smallText]}>
              {entries[index].competition}
            </Text>

            <Buttn
              label={"Leaderboard"}
              buttonType={"secondary"}
              onPressHandler={viewLeaderBoard}
              icon={"leaderboard"}
            />
          </>
        )}
      </View>

      {index === entries.length ? (
        <View style={styles.done}>
          <Buttn
            label={"Leaderboard"}
            buttonType={"secondary"}
            onPressHandler={viewLeaderBoard}
            icon={"leaderboard"}
          />
          <Image source={require("../../assets/testerImage.png")} />
          <Text style={styles.noMoreEntries}>End of the line!</Text>
          <Text style={styles.subText}>
            There are no more entries in Neo Traditional, come back later to
            explore more tattoos!
          </Text>
          <Buttn
            buttonType={"primaryOutline"}
            label={"explore categories"}
            onPressHandler={() => navigation.navigate("Competitions")}
          />
        </View>
      ) : (
        <>
          <View style={styles.innerContainer}>
            {entries &&
              entries
                .map((item, index) => (
                  <VoteCard
                    key={item.id}
                    item={item}
                    profileImage={item.user["profileImage"]}
                    index={entries.length - index - 1}
                    removeCard={() => changeIndex()}
                    swipedDirection={(direction) =>
                      swipedDirection(direction, item.id)
                    }
                  />
                ))
                .reverse()}
          </View>

          <View style={styles.information}>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                paddingVertical: 10,
              }}
            >
              <MaterialIcons
                name="person-outline"
                color={Colors.secondary}
                size={20}
              />
              <Text style={[TextStyles.body, { paddingHorizontal: 10 }]}>
                {entries[index].user["username"]}
              </Text>
            </View>
            <Text style={[TextStyles.headingThree, { paddingHorizontal: 20 }]}>
              {entries[index].name}
            </Text>

            <Text style={[TextStyles.body, { paddingHorizontal: 20 }]}>
              {entries[index].description}
            </Text>

            <View style={styles.buttonsContainer}>
              <Buttn
                icon={"email"}
                buttonType={"primary"}
                label={`Email ${entries[index].user["username"]}`}
                onPressHandler={onPressHandler}
              />
              <Buttn
                icon={"phone"}
                buttonType={"secondary"}
                label={`Call ${entries[index].user["username"]}`}
                onPressHandler={callPressHandler}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}
