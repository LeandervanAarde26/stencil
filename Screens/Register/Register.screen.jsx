import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Register.styles";
import Buttn from "../../Components/Button/Button.component";
import Input from "../../Components/Input/Input.component";
import { registerUser } from "../../services/firebase.services";

const defaultValues = {
  name: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmedPassword: "",
};

export default function Register({navigation}) {
  const [values, setValues] = useState(defaultValues);
  const { name, email, contactNumber, password, confirmedPassword } = values;

  const handleClick = () => {
      // if(!name || !email || !password|| !confirmedPassword ||  password !== password){
      //   console.log('fill in all values')
      // } else{
      //   registerUser(name,email, password)
      // }

      navigation.navigate("Home")


  }

  const registerAccount = () =>{
    navigation.navigate('Login');

  }


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
          onPressHandler={handleClick}
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
          onPressHandler={registerAccount}
          icon={"login"}
        />
      </View>
    </View>
  );
}
