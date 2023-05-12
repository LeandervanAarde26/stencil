import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./Timer.styles";

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Remaining time for entries</Text>
      <View style={styles.timerContainer}>
        <View style={styles.timeIndicator}>
          <Text style={styles.indicator}>Days</Text>
          <Text style={styles.timer}>03 :</Text>
        </View>

        <View>
          <Text style={styles.indicator}>Hours</Text>

          <Text style={styles.timer}>03 : </Text>
        </View>

        <View>
          <Text style={styles.indicator}>Minutes</Text>

          <Text style={styles.timer}>00 : </Text>
        </View>

        <View>
          <Text style={styles.indicator}>Seconds</Text>

          <Text style={styles.timer}>40 </Text>
        </View>
        
      </View>
    </View>
  );
}
