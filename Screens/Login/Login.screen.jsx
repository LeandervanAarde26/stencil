import { Text, View, Image, Alert, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./Login.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";
import { loginUser, resetPassword } from "../../services/firebase.services";
import SModal from "../../Components/Modal/Modal.component";

const defaultValues = {
  email: "",
  password: "",
};

export default function Login({ navigation }) {
  const [values, setValues] = useState(defaultValues);
  const { email, password } = values;
  const [modalVisible, setModalVisible] = useState(false);
  const [emailErr, setEmailErr] = useState();
  const [accountFailure, setAccountFailure] = useState(false);

  const ToggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleClick = async () => {
    if (!email || !password) {
      ToggleModal();
    } else {
      const success = await loginUser(email, password);
      switch (success) {
        case true:
          navigation.navigate("Home");
          setValues(defaultValues)
          break;
        case "Firebase: Error (auth/wrong-password).":
          Alert.alert(
            "Password incorrect",
            "Please ensure password is correct"
          );
          break;
        case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
          Alert.alert(
            "Account locked",
            "Password entered wrong too many times, reset it now",
            [
              {
                text: "Send reset email",
                onPress: () => resetPassword(email),
              },
            ]
          );
          break;
        default:
          Alert.alert(
            "Account not found",
            "Account not found, ensure all fields are correct",
            [
              {
                text: "try again",
              },
            ]
          );
          break;
      }
    }
  };

  const registerAccount = () => {
    navigation.navigate("Register");
    // console.log("HEY")
  };

  const validateEmail = () => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    setEmailErr(!result);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      {modalVisible && (
        <SModal
          value={modalVisible}
          toggleModal={ToggleModal}
          text={"Please fill in all fields!"}
        />
      )}

      {accountFailure && (
        <SModal
          value={modalVisible}
          toggleModal={accountFailure}
          text={"No account found with email"}
        />
      )}
      <Image style={styles.image} source={require("../../assets/Logo.png")} />
      <View style={styles.inputContainer}>
        <Input
          label={emailErr ? "Please enter valid email" : "Email"}
          placeholder={"Enter your Email"}
          keyboardType="email-address"
          onChangeText={(text) => setValues({ ...values, email: text })}
          value={email}
          err={emailErr}
          checkInput={validateEmail}
        />

        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          keyboardType="default"
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType={"password"}
          value={password}
          err={false}
          onChangeText={(text) => setValues({ ...values, password: text })}
          checkInput={() => {
            return null;
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Buttn
          label={"Log into my account"}
          buttonType={"secondary"}
          onPressHandler={handleClick}
          icon={"login"}
        />

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.hintText}>Don't have an account? </Text>
          <View style={styles.line}></View>
        </View>

        <Buttn
          label={"Register new account"}
          buttonType={"primaryOutline"}
          onPressHandler={registerAccount}
          icon={"person-add-alt"}
        />
      </View>
    </View>
  );
}
