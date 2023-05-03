import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Buttn from "./Components/Button/Button.component";

export default function App() {
  function testHandler(){
    console.log("You are a star!")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>The last thing you did was: Buttons!</Text>
      {/* Example Button */}
      <Buttn label={"Are you a what?"} buttonType={'success'} onPressHandler={testHandler}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
