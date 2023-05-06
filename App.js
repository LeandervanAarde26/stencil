import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Buttn from "./Components/Button/Button.component";
import { Colors } from "./Utils/Colors";
import Input from "./Components/Input/Input.component";
import { useState } from "react";
import Register from "./Screens/Register/Register.screen";

const defaultValues = {
  Email: '',
  name: ''
};

export default function App() {
  function testHandler(e){ 
    let hello = e.target;
    console.log(values)
  }
  
  const [values, setValues] = useState(defaultValues);
  const {email, name} = values;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Register/>
      {/* <Text>The last thing you did was: Buttons!</Text> */}
      {/* Example Button */}
      {/* <Buttn label={"Are you a what?"} buttonType={'success'} onPressHandler={testHandler}/>
      <Input 
        label={"Email"}
        inputValue={email}
        onChangeText={(text) => setValues({...values, Email: text})}
        /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0 ,
    backgroundColor: Colors.primary
  },
});
