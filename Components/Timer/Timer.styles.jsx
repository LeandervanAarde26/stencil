import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },

  heading: {
    fontSize: 22,
    color: Colors.White,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  timeContainer: {
    width: "100%",
    flexDirection: "row",
    // backgroundColor: 'blue',
    paddingVertical: 5,
  },

  indicator: {
    color: Colors.secondary,
    fontSize: 13,
    fontWeight: "500",
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
    fontSize: 40,
    fontWeight: "bold",
    width: "19%",
    textAlign: "center",
  },

  timerDone: {
    color: Colors.Danger,
    fontSize: 40,
    fontWeight: "bold",
    width: "19%",
    textAlign: "center",
  },

  dot: {
    color: Colors.White,
    fontSize: 40,
    fontWeight: "bold",

    textAlign: "center",
  },
});
