import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./Timer.styles";

export default function Timer({ countDown }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Remaining time for entries</Text>
      <View style={styles.timeContainer}>
      <Text style={styles.indicator}>Days</Text>
      <Text style={styles.indicator}>Hours</Text>
      <Text style={styles.indicator}>Minutes</Text>
      <Text style={styles.indicator}>Seconds</Text>
      </View>

      <View style={styles.time}>
      <Text style={styles.timer}>{countDown.days} </Text>
      <Text style={styles.dot}>: </Text>
      <Text style={styles.timer}>{countDown.hours} </Text>
      <Text style={styles.dot}>: </Text>
      <Text style={styles.timer}>{countDown.minutes} </Text>

      <Text style={styles.dot}>: </Text>
      <Text style={styles.timer}>{countDown.seconds}</Text>
      </View>      
    </View>
  );
}

