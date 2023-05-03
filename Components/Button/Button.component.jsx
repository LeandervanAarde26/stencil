import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { buttonStyles } from "./Button.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../Utils/Colors";

export default function Buttn({ label, buttonType,onPressHandler }) {
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
      <Ionicons name="chevron-forward-outline" size={20} color="white" />
      <Text style={buttonStyles.text}>{label}</Text>
    </Pressable>
  );
}
