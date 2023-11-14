import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },

  center:{
    textAlign: 'center'
  },

  timeContainer: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor: 'blue',
    paddingVertical: 0,
  },

  indicator: {
    color: Colors.secondary,
    fontSize: 13,
    // fontWeight: "500",
    width: "25%",
    textAlign: "center",
  },

  time: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },

  timer: {
    color: Colors.White,
    fontSize: 35,
    // fontWeight: "bold",
    width: "19%",
    textAlign: "center",
  },

  timerDone: {
    color: Colors.Danger,
    fontSize: 35,
    // fontWeight: "bold",
    width: "19%",
    textAlign: "center",
  },

  dot: {
    color: Colors.White,
    fontSize: 35,
    // fontWeight: "bold",

    textAlign: "center",
  },
});
