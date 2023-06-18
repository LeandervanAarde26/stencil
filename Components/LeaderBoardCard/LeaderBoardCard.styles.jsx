import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 30,
    paddingHorizontal: 10,
    // paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 3,
    height: 250,
    overflow: "hidden",
    marginVertical: 7
  },

  col: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    padding: 5,
  },

  topBanner: {
    backgroundColor: "rgba(0, 0, 0, 0.62)",
    opacity: 0.75,
  },

  bottomCol: {
    alignItems: "flex-end",
    paddingTop: 10,
    paddingRight: 10,
  },
  imageContainer: {
    height: "100%",
    backgroundColor: "red",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});
