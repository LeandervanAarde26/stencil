import { Text, View, Image } from "react-native";
import React, {useState} from "react";
import { styles } from "./Login.styles";
import Input from "../../Components/Input/Input.component";
import Buttn from "../../Components/Button/Button.component";

const defaultValues = {
    email: "",
    password: "",
  };

export default function Login({navigation}) {

    const [values, setValues] = useState(defaultValues);
    const {  email,  password } = values;
    const handleClick = () => {
      navigation.navigate('Home');
    }

    const registerAccount = () =>{
      navigation.navigate('Register');
      // console.log("HEY")
    }
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/Logo.png")} />
      <View style={styles.inputContainer}>
        <Input
          label={"Email"}
          placeholder={"Enter your Email"}
          keyboardType="email-address"
          onChangeText={(text) => setValues({ ...values, email: text })}
          value={email}
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
          onChangeText={(text) => setValues({ ...values, password: text })}
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