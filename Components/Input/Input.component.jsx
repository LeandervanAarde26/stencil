import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./Input.styles";

export default function Input({
  label,
  labelStyle,
  placeholder,
  inputStyle,
  checkInput,
  err,
  ...otherProps
}) {
  const [focus, setFocus] = useState([styles.label, styles.input]);

  useEffect(() => {
    setFocus(err ? [styles.errorLabel, styles.errorInput] : [styles.label, styles.input]);
  }, [err]);

  return (
    <View style={styles.container}>
      <Text style={labelStyle || focus[0]}>{label} </Text>
      <TextInput
        style={labelStyle || focus}
        onFocus={() => {
          setFocus(err ?[styles.errorLabel, styles.errorInput] : [styles.activeLabel, styles.activeInput]);
        }}

        onBlur={() => {
          setFocus(err ? [styles.errorLabel, styles.errorInput] : [styles.label, styles.input]);
          checkInput(); // Call the checkInput function
        }}
        placeholder={placeholder}
        placeholderTextColor={"#A0A0A0"}
        underlineColorAndroid="transparent"
        {...otherProps}
      />
    </View>
  );
}
