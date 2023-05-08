import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Competitions.styles";
import Buttn from "../../Components/Button/Button.component";

export default function Competitions() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Remain time for Entries</Text>
      {/* Timer */}
      <View style={styles.timerContainer}>
        <View style={styles.time}>
          <Text style={styles.header}>Days</Text>
          <Text style={styles.content}>00 :</Text>
        </View>

        <View style={styles.time}>
          <Text style={styles.header}>Hours</Text>
          <Text style={styles.content}>00 :</Text>
        </View>

        <View style={styles.time}>
          <Text style={styles.header}>Minutes</Text>
          <Text style={styles.content}>00 :</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.header}>Seconds</Text>
          <Text style={styles.content}>00</Text>
        </View>
      </View>

      {/* Competition Image */}

      <Image
        source={require("../../assets/testerImage.png")}
        style={styles.image}
      />

      {/* Descripttion */}
      <Text style={styles.desc}>
        Put your line work to the test against competitors, post your picture
        and let users vote on who has the best Line work!
      </Text>
      <View style={styles.buttonsContainer}>
        <Buttn buttonType={"primary"} label={"Enter"} icon={"add"} />
        <Buttn buttonType={"secondary"} label={"Judge"} icon={"gavel"} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        <View style={styles.card}></View>

        <View style={styles.card}></View>

        <View style={styles.card}></View>
      </ScrollView>
    </View>
  );
}
