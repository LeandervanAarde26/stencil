import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Competitions from "../Screens/Competitions/Competitions.route";
import { Colors } from "../Utils/Colors";
import Profile from "../Screens/Profile/Profile.screen";
import Categories from "../Screens/Categories/Categories.screen";
import Enter from "../Screens/Enter/Enter.screen";
import Voting from "../Screens/Voting/Voting.screen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Competitions"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#3f2f25" },
        tabBarStyle: {
          borderColor: Colors.White,
          borderTopColor: Colors.White,
          borderTopWidth: 3,
          borderWidth: 3,
          borderRadius: 14,
          width: "95%",
          height: 80,
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 25,
          backgroundColor: Colors.primary,
          // paddingVertical: 5
          paddingBottom: 10,
          paddingHorizontal: 5,
        },
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name={"Competitions"}
        component={Competitions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name={"Vote"}
        component={Voting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name={"Enter"}
        component={Enter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name={"Categories"}
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="groups" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
