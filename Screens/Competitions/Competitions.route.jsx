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
  addUserWin,
  getAllCompetitions,
  getCategoryWinners,

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
    const convertedValue = todayD.getTime() / 1000;
    return convertedValue;
  };

  useEffect(() => {
    if (fireBaseCompetitionData && route.params?.cat !== undefined) {
      setComps(fireBaseCompetitionData);
    }
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
