import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Register.styles";
import Buttn from "../../Components/Button/Button.component";
import Input from "../../Components/Input/Input.component";

const defaultValues = {
  name: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmedPassword: "",
};

export default function Register() {
  const [values, setValues] = useState(defaultValues);
  const { name, email, contactNumber, password, confirmedPassword } = values;

  const handleClick = () => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/Logo.png")} />

      <View style={styles.inputContainer}>
        <Input
          label={"Name"}
          value={name}
          placeholder={"Enter your name"}
          onChangeText={(text) => setValues({ ...values, name: text })}
        />

        <Input
          label={"Email"}
          placeholder={"Enter your Email"}
          keyboardType="email-address"
          onChangeText={(text) => setValues({ ...values, email: text })}
          value={email}
        />

        <Input
          label={"Contact Number"}
          placeholder={"Enter your Phone number"}
          keyboardType="phone-pad"
          onChangeText={(text) => setValues({ ...values, contactNumber: text })}
          value={contactNumber}
        />

        <Input
          label={"Password"}
          placeholder={"Pick a secure password"}
          keyboardType="default"
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          value={password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />

        <Input
          label={"Confirm password"}
          keyboardType="default"
          placeholder={"Retype your password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          onChangeText={(text) =>
            setValues({ ...values, confirmedPassword: text })
          }
          value={confirmedPassword}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Buttn
          label={"Register new account"}
          buttonType={"primary"}
          onPressHandler={null}
          icon={"person-add-alt"}
        />

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.hintText}>Already have an account? </Text>
          <View style={styles.line}></View>
        </View>

        <Buttn
          label={"Log into my account"}
          buttonType={"secondaryOutline"}
          onPressHandler={handleClick}
          icon={"login"}
        />
      </View>
    </View>
  );
}
