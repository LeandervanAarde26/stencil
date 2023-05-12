import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { Colors } from "./Utils/Colors";
import { useState } from "react";
import Register from "./Screens/Register/Register.screen";
import Login from "./Screens/Login/Login.screen";
import Competitions from "./Screens/Competitions/Competitions.route";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Navigators/Home.navigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar status="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.primary, paddingTop: 27 },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
    backgroundColor: Colors.primary,
  },
});
