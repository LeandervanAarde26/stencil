import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },

  heading: {
    fontSize: 21,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.White,
  },

  timerContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    color: Colors.secondary,
    fontSize: 14,
  },

  content: {
    fontSize: 45,
    fontWeight: "bold",
    color: Colors.White,
  },

  image: {
    alignSelf: "center",
    width: Platform.OS === "android" ? "50%" : "40%",
    height: Platform.OS === "android" ? "30%" : "25%",
  },

  desc: {
    color: Colors.White,
    fontSize: 13,
  },

  buttonsContainer: {
    flex: 0.19,
    flexDirection: "row",
    gap: 15,
  },
  scroll: {
    flex: 1,
  },

  card: {
    flex: 1,
    width: 210,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#141617",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
