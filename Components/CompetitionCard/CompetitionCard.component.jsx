import { Text, View, Image, Dimensions, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./CompetitionCard.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Buttn from "../Button/Button.component";
import Timer from "../Timer/Timer.component";
import { Colors } from "../../Utils/Colors";
import { TextStyles } from "../../Utils/Text";

export default function CompetitionCard({
  remainingTime,
  competitionName,
  description,
  category,
  contestants,
  image,
  navigation,
  judging
}) {
  const width = Dimensions.get("window").width;
  const unixTimestamp = remainingTime;

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [ loadEnd, setLoadEnd] = useState(false)

  const {days, hours, minutes, seconds} = countdown

  const onLoadEnd = () => {
    setLoadEnd(prev => !prev);
  }


  useEffect(() => {
    const calculateTimeDifference = () => {
      let currentDate = new Date();
      let timestampDate = new Date(unixTimestamp * 1000);
      let timeDifference = Math.floor((timestampDate - currentDate) / 1000);

      let days = Math.floor(timeDifference / (24 * 60 * 60));
      let hours = Math.floor((timeDifference / (60 * 60)) % 24);
      let minutes = Math.floor((timeDifference / 60) % 60);
      let seconds = Math.floor(timeDifference % 60);
      days < 0 ? (days = 0) : days < 10 ? (days = "0" + days) : days;
      hours < 0 ? (hours = 0) : hours < 10 ? (hours = "0" + hours) : hours;
      minutes < 0
        ? (minutes = 0)
        : minutes < 10
        ? (minutes = "0" + minutes)
        : minutes;
      seconds < 0
        ? (seconds = 0)
        : seconds < 10
        ? (seconds = "0" + seconds)
        : seconds;
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(calculateTimeDifference, 1000);
    calculateTimeDifference(); // Initial calculation to set the countdown immediately

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={[styles.container, { width: width - 20 }]}>
      <Text style={TextStyles.headingOne}>{competitionName}</Text>
      <Image source={{ uri: image }} style={styles.image} onLoadEnd={onLoadEnd} />
      <View style={styles.innerContainer}>
        <Timer countDown={countdown} />
        <View style={styles.contestantsContainer}>
          <MaterialIcons
            name={"description"}
            size={20}
            color={Colors.secondary}
          />
          <Text style={TextStyles.smallText}>Description</Text>
        </View>

        <Text style={TextStyles.body}>{description}</Text>
        <View style={styles.contestantsContainer}>
          <MaterialIcons
            name={"person-outline"}
            size={25}
            color={Colors.secondary}
          />
          <Text style={TextStyles.smallText}>{contestants}/100 Contestants</Text>
        </View>
        <View style={styles.buttonContainer}>
          {
            days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0
            ?
            null
            :
            <Buttn
            buttonType={"primary"}
            label={"Enter"}
            onPressHandler={navigation}
            icon={"add-circle-outline"}
          />
          }
          <Buttn buttonType={"secondary"} label={"Judge"} icon={"gavel"} onPressHandler={judging}/>
        </View>
      </View>
    </View>
  );
}
