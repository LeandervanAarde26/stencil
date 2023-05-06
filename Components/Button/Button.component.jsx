import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { buttonStyles } from "./Button.styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Colors } from "../../Utils/Colors";

export default function Buttn({ label, buttonType,onPressHandler, icon }) {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [
              buttonStyles.button,
              buttonStyles[buttonType],
              buttonStyles.pressedIos,
            ]
          : [buttonStyles.button, buttonStyles[buttonType]]
      }
      android_ripple={{ color: Colors.White }}
      onPress={onPressHandler}
    >
      <MaterialIcons name={icon} size={20} color="white" />
      <Text style={buttonStyles.text}>{label}</Text>
    </Pressable>
  );
}
