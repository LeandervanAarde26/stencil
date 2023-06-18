import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { TextStyles } from "../../Utils/Text";
import { styles } from "./LeaderBoardCard.styles";

export default function LeaderBoardCard({ name, competition, image,position }) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={ { uri: image }}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <View style={[styles.col, styles.topBanner]}>
          <Text style={TextStyles.headingTwo}># {position}</Text>
        </View>

        <View style={[styles.col, styles.bottomCol]}>
          <Text style={TextStyles.body}>{competition}</Text>
          <Text style={TextStyles.headingThree}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
