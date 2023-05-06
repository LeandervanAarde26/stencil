import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Input.styles";

export default function Input({
  label,
  labelStyle,
  inputStyle,
  ...otherProps
}) {
  const [focus, setFocus] = useState([styles.label, styles.input]);
  return (
    <View style={styles.container}>
      <Text style={labelStyle || focus[0]}>{label} </Text>
      <TextInput
        style={labelStyle || focus}
        onFocus={() => {
          setFocus([styles.activeLabel, styles.activeInput]);
        }}
        onBlur={() => {
          setFocus([styles.label, styles.input]);
        }}
        placeholder="Some Placeholder"
        placeholderTextColor={"#A0A0A0"}
        underlineColorAndroid="transparent"
        {...otherProps}
      />
    </View>
  );
}
