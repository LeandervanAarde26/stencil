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
import { useFocusEffect } from "@react-navigation/native";
import { getAllCompetitions } from "../../services/firestore.db";
import { Colors } from "../../Utils/Colors";
import { TextStyles } from "../../Utils/Text";
import { FireBaseCompetitionContext } from "../../store/FireBaseCompetitions.context";
export default function Competitions({ navigation}) {
  const fireBaseCompetitionData = useContext(FireBaseCompetitionContext)
  const enterCompetition = (category) => {
    navigation.navigate("Enter", { category: category });
  };
  const loadingMessages = [
    "Loading tattoos...",
    "Pouring ink...",
    "Finishing stencils...",
    "Wrapping up...",
    "Picking playlist...",
  ];

  let randomIndex = Math.floor(Math.random() * loadingMessages.length);
  console.log(fireBaseCompetitionData)


  const competitions =
    fireBaseCompetitionData &&
    fireBaseCompetitionData.map((i, index) => (
      <CompetitionCard
        {...i}
        key={index}
        navigation={() => enterCompetition(i.competitionName)}
      />
    ));

  const judgeCompetition = () => {
    console.log("judgecompetition");
  };

  const viewResults = () => {};

  return fireBaseCompetitionData && competitions ? (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container2}
      >
        {competitions}
      </ScrollView>
    </View>
  ) : (
    <View style={styles.containerAlt}>
      <ActivityIndicator size="small" color={Colors.tertiary} />
      <Text style={TextStyles.smallText}>{loadingMessages[randomIndex]}</Text>
    </View>
  );
}