import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard.component";
import { addProjectsToDataBase } from "../../services/firebase.services";
import { useFocusEffect } from "@react-navigation/native";
import { getAllCompetitions } from "../../services/firestore.db";
import { Colors } from "../../Utils/Colors";
import { TextStyles } from "../../Utils/Text";
export default function Competitions({ navigation, data }) {
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

  const competitions =
    data &&
    data.map((i, index) => (
      <CompetitionCard
        {...i}
        key={index}
        navigation={() => enterCompetition(i.category)}
      />
    ));

  const judgeCompetition = () => {
    console.log("judgecompetition");
  };

  const viewResults = () => {};

  return data && competitions ? (
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