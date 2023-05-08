import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { Colors } from "./Utils/Colors";
import { useState } from "react";
import Register from "./Screens/Register/Register.screen";
import Login from "./Screens/Login/Login.screen";
import Competitions from "./Screens/Competitions/Competitions.route";




export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Register/> */}
      {/* <Login/> */}
      <Competitions/>
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
