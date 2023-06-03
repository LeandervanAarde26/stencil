import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    // elevation: 4,
    // padding: 20
  },

  innerContainer: {
    backgroundColor: "#141617",
    flex: 1,
    borderRadius: 9,
    padding: 15,
    gap: 10,
    width: "100%",
  },

  buttonContainer: {
    height: 50,
    flexDirection: "row",
    gap: 15,
  },

  image: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    resizeMode: 'contain'
  },
  description: {
    color: Colors.White,
    fontWeight: 600,
    fontSize: 14,
  },

  contestantsContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  contestants: {
    color: Colors.White,
    fontWeight: "600",
    fontSize: 12,
  },
});
