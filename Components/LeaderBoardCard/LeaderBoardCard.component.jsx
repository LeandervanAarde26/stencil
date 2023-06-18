import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from "react-native";
import { TextStyles } from "../../Utils/Text";
import { styles } from './LeaderBoardCard.styles';

export default function LeaderBoardCard() {
  return (
    <View style={styles.card}>
    <ImageBackground source={require("../../assets/profileBg.png")}
    resizeMode="cover"
    style={styles.imageContainer}
    >
    <View style={[styles.col, styles.topBanner]}>
      <Text style={TextStyles.headingTwo}>#1</Text>
    </View>

    <View style={[styles.col, styles.bottomCol]}>
      <Text style={TextStyles.headingThree}>Entry name, Competition</Text>
    </View>
    </ImageBackground>
  </View>
  )
}

