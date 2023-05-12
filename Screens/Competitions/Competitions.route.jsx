import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";
import CompetitionCard from "../../Components/CompetitionCard/CompetitionCard.component";

export default function Competitions() {
  return (
      <View style={styles.container}>
          <ScrollView 
          horizontal 
          style={styles.container2}>
            <CompetitionCard/>

            <CompetitionCard/>

            <CompetitionCard/>
          </ScrollView>
      </View>
  );
}
