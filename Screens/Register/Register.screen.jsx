import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Register.styles";
import Buttn from "../../Components/Button/Button.component";
import Input from "../../Components/Input/Input.component";
import { registerUser } from "../../services/firebase.services";
import { Alert } from "react-native";
import SModal from "../../Components/Modal/Modal.component";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../Utils/Colors";

const defaultValues = {
  username: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmedPassword: "",
  role: ""
};

export default function Register({ navigation }) {
  const [values, setValues] = useState(defaultValues);
  const { username, email, contactNumber, password, confirmedPassword, role } =
    values;
  const [passErr, setPassErr] = useState(false);
  const [confirmPassErr, setConfirmPassErr] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);

  const ToggleModal = () => {
    setModalVisible((prev) => !prev);
  };
  const minimumLength = 3;
  const checkValues =
    username.trim().length >= minimumLength &&
    email.trim().length >= minimumLength &&
    password.trim().length >= minimumLength &&
    confirmedPassword.trim().length >= minimumLength;

  const validityChecker = () => {
    if (!checkValues || password !== confirmedPassword) {
      ToggleModal();
      return false;
    } else {
      return true;
    }
  };

  const handleClick = async () => {
    if (validityChecker()) {
      const success = await registerUser(username, email, password, role);
      switch (success) {
        case "Firebase: Error (auth/email-already-in-use).":
          Alert.alert(
            "Email in use",
            "Email already exists, please use another one"
          );
          break;
        default:
          navigation.navigate("Home");
          break;
      }
    }
  };

  const registerAccount = () => {
    navigation.navigate("Login");
  };

  const checkInputValidity = (key) => {
    switch (key) {
      case "email":
        const pattern =
          /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        setEmailErr(!result);
        break;
      case "username":
        username.length < 3 ? setNameErr(true) : setNameErr(false);
        break;
      case "password":
        password.length < 8 ? setPassErr(true) : setPassErr(false);
        break;
      case "confirmedPassword":
        confirmedPassword !== password
          ? setConfirmPassErr(true)
          : setConfirmPassErr(false);
        break;
      default:
        console.log("This is nothing");
        break;
    }
  };

  return (
    <View style={styles.container}>
      {modalVisible && (
        <SModal
          value={modalVisible}
          toggleModal={ToggleModal}
          text={"make sure all fields are correct!"}
        />
      )}

      <Image style={styles.image} source={require("../../assets/Logo.png")} />

      <View style={styles.inputContainer}>
        <Input
          label={nameErr ? "Enter valid name" : "Name"}
          value={username}
          placeholder={"Enter your name"}
          onChangeText={(text) => setValues({ ...values, username: text })}
          err={nameErr}
          checkInput={() => checkInputValidity("username")}
        />

        <Input
          label={emailErr ? "Please enter valid email" : "Email"}
          placeholder={"Enter your Email"}
          keyboardType="email-address"
          onChangeText={(text) => setValues({ ...values, email: text })}
          value={email}
          err={emailErr}
          checkInput={() => checkInputValidity("email")}
        />

        <Input
          label={passErr ? "Passwords must be atleast 8 characters": "Password"}
          placeholder={"Pick a secure password"}
          keyboardType="default"
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          value={password}
          err={passErr}
          checkInput={() => checkInputValidity("password")}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />

        <Input
          label={confirmPassErr ? "Passwords don't match": "Confirm Password"}
          keyboardType="default"
          placeholder={"Retype your password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          
          onChangeText={(text) =>
            setValues({ ...values, confirmedPassword: text })
          }
          err={confirmPassErr}
          checkInput={() => checkInputValidity("confirmedPassword")}
          value={confirmedPassword}
          
        />
      </View>

      <Text style={styles.label}>Application Role</Text>
      <View
          style={styles.pickerContainer}
          itemStyle={{ color: Colors.primary, backgroundColor: Colors.primary }}
        >
          <Picker
            style={styles.picker}
            selectedValue={role}
            onValueChange={(item) =>
              setValues({ ...values, role: item })
            }
          >
            <Picker.Item
              style={styles.pickerItem}
              label="Artist"
              color={Platform.OS === "android" ? "black" : "white"}
              value="Artist"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Enthustiast"
              color={Platform.OS === "android" ? "black" : "white"}
              value="Tattoo Enthustiast"
            />
          </Picker>
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
