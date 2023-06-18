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

  const convertTimeToSeconds = (days, hours) => {
      const today = new Date();
      const todayD = new Date(today);
      todayD.setDate(today.getDate() + days);
      todayD.setHours(hours, 0, 0, 0);
      const convertedValue = todayD.getTime()/1000
      return convertedValue
  }

  const resetCompetitionDate = async (values) => {
    const randomNumber = Math.floor(Math.random() * 8) + 3;
    const randomReset = randomNumber + 4
    const todaysDate = new Date();
    const currentHour = todaysDate.getHours();
    const finalVal = convertTimeToSeconds(0 , currentHour)
    const finalNewDate = convertTimeToSeconds(randomNumber, 15)
    const finalReset  = convertTimeToSeconds(randomReset, 15)
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
        currentHour +1,
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
