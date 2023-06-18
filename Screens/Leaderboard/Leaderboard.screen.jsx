import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./Leaderboard.styles";
import { TextStyles } from "../../Utils/Text";
import { ImageBackground } from "react-native";
import LeaderBoardCard from "../../Components/LeaderBoardCard/LeaderBoardCard.component";

export default function Leaderboard() {
  return (
    <View style={styles.container}>
            <LeaderBoardCard/>
    </View>
  );
}
