import { Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { styles } from "./CompetitionCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Buttn from "../Button/Button.component";
import Timer from "../Timer/Timer.component";
import { Colors } from "../../Utils/Colors";

export default function CompetitionCard() {
  const width = Dimensions.get("window").width;
  return (
    <View style={[styles.container, { width: width - 20 }]}>
      <Text style={styles.title}>The Competition Name</Text>
      <Image
        source={require("../../assets/testerImage.png")}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.description}>
          Put your line work to the test against competitors, post your picture
          and let users vote on who has the best Line work!
        </Text>
        <View style={styles.contestantsContainer}>
          <MaterialIcons
            name={"person-outline"}
            size={25}
            color={Colors.secondary}
          />
          <Text style={styles.contestants}>110 Contestants</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Buttn
            buttonType={"primary"}
            label={"Enter"}
            icon={"add-circle-outline"}
          />
          <Buttn buttonType={"secondary"} label={"Judge"} icon={"gavel"} />
        </View>
        <Timer />
      </View>
    </View>
  );
}
