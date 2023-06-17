import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard.component";
import { addProjectsToDataBase } from "../../services/firebase.services";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import {
  getAllCompetitions,
  resetCompetitions,
} from "../../services/firestore.db";
import { Colors } from "../../Utils/Colors";
import { TextStyles } from "../../Utils/Text";
import { FireBaseCompetitionContext } from "../../store/FireBaseCompetitions.context";

export default function Competitions({ navigation, route }) {
  const fireBaseCompetitionData = useContext(FireBaseCompetitionContext);
  const [comps, setComps] = useState(null);
  const enterCompetition = (category) => {
    navigation.navigate("Enter", { category: category });
  };

  const routeParams = route.params;
  const isFocused = useIsFocused();
  const loadingMessages = [
    "Loading tattoos...",
    "Pouring ink...",
    "Finishing stencils...",
    "Wrapping up...",
    "Picking playlist...",
  ];
  let randomIndex = Math.floor(Math.random() * loadingMessages.length);

  const resetCompetitionDate = async (values) => {
    const randomNumber = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    const todaysDate = new Date();
    const today = new Date(todaysDate);
    today.setDate(todaysDate.getDate() + 1);
    const finalVal = today.getTime() / 1000;

    const randomDay = new Date(todaysDate);
    randomDay.setDate(todaysDate.getDate() + randomNumber);
    randomDay.setHours(15, 0, 0, 0);
    const finalNewDate = randomDay.getTime() / 1000;

    const newResetDate = new Date(todaysDate);
    newResetDate.setDate(todaysDate.getDate() + randomNumber + 4);
    newResetDate.setHours(15, 0, 0, 0);
    const finalReset = newResetDate.getTime() / 1000;
;
    const currentHour = todaysDate.getHours();
    const hourRangeStart =
      new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate(),
        currentHour,
        0,
        0,
        0
      ).getTime() / 1000;
    const hourRangeEnd =
      new Date(
        todaysDate.getFullYear(),
        todaysDate.getMonth(),
        todaysDate.getDate(),
        currentHour + 1,
        0,
        0,
        0
      ).getTime() / 1000;

    console.log("Hour Range Start:", hourRangeStart);
    console.log("Hour Range End:", hourRangeEnd);

    for (const val of values) {
      if (
        val.resetDate == finalVal ||
        (val.resetDate > hourRangeStart && val.resetDate < hourRangeEnd)
      ) {
        console.log("Perfect match within the hour range");
        await resetCompetitions(val.id, finalNewDate, finalReset);
      }
    }
  };

  useEffect(() => {
    if (fireBaseCompetitionData && route.params?.cat !== undefined) {
      setComps(fireBaseCompetitionData);
    }

    fireBaseCompetitionData &&
      fireBaseCompetitionData &&
      resetCompetitionDate(fireBaseCompetitionData);
  }, [fireBaseCompetitionData, route.params?.cat]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      navigation.setParams({ cat: null });
    });

    if (
      fireBaseCompetitionData &&
      route.params?.cat !== null &&
      route.params !== undefined
    ) {
      let filteredData = null;
      filteredData = fireBaseCompetitionData.filter((competition) => {
        return competition.category === route.params?.cat;
      });
      setComps(filteredData);
    } else {
      setComps(fireBaseCompetitionData);
    }

    return unsubscribe;
  }, [navigation, route.params?.cat, fireBaseCompetitionData]);

  const judgeCompetition = (id) => {
    navigation.navigate("Vote", { entries: id });
  };
  return fireBaseCompetitionData && comps ? (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container2}
      >
        {comps.map((i, index) => (
          <CompetitionCard
            {...i}
            key={index}
            navigation={() => enterCompetition(i.competitionName)}
            judging={() => judgeCompetition(i.competitionName)}
          />
        ))}
      </ScrollView>
    </View>
  ) : (
    <View style={styles.containerAlt}>
      <ActivityIndicator size="small" color={Colors.tertiary} />
      <Text style={TextStyles.smallText}>{loadingMessages[randomIndex]}</Text>
    </View>
  );
}
