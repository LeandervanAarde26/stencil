import { Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./CompetitionCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Buttn from "../Button/Button.component";
import Timer from "../Timer/Timer.component";
import { Colors } from "../../Utils/Colors";

export default function CompetitionCard({
  remainingTime,
  competitionName,
  description,
  category,
  contestants,
  image,
}) {
  const width = Dimensions.get("window").width;
  const unixTimestamp = remainingTime;
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeDifference = () => {
      let currentDate = new Date();
      let timestampDate = new Date(unixTimestamp * 1000);
      let timeDifference = Math.abs(currentDate - timestampDate);
      let days = Math.floor(timeDifference / millisecondsPerDay);
      let hours = Math.floor((timeDifference / (60 * 60 * 1000)) % 24);
      let minutes = Math.floor((timeDifference / (60 * 1000)) % 60);
      let seconds = Math.floor((timeDifference / 1000) % 60);
      setCountdown({
        days: days < 10 ? "0" + days : days,
        hours: hours < 10 ? "0" + hours : hours,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,
      });
    };
    const timer = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={[styles.container, { width: width - 20 }]}>
      <Text style={styles.title}>{competitionName}</Text>
      <Image
        source={require("../../assets/testerImage.png")}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
        <Timer countDown={countdown} />
        <View style={styles.contestantsContainer}>
          <MaterialIcons
            name={"description"}
            size={20}
            color={Colors.secondary}
          />
          <Text style={styles.contestants}>Description</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
        <View style={styles.contestantsContainer}>
          <MaterialIcons
            name={"person-outline"}
            size={25}
            color={Colors.secondary}
          />
          <Text style={styles.contestants}>{contestants}/100 Contestants</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Buttn
            buttonType={"primary"}
            label={"Enter"}
            icon={"add-circle-outline"}
          />
          <Buttn buttonType={"secondary"} label={"Judge"} icon={"gavel"} />
        </View>
      </View>
    </View>
  );
}
