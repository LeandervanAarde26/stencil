import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 10,
    // paddingHorizontal: 20,
  },
  informationContainer: {
    flex: 0.4,
  },

  buttonContainer: {
    height: 50,
  },

  innerContainer: {
    flex: 0.86,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  information: {
    // backgroundColor: 'red',
    flex: 0.45,
    gap: 2,
    padding: 5,
  },

  artworkTitle: {
    fontSize: 22,
    color: Colors.White,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 25,
    marginTop: 20,
  },

  heading: {
    fontSize: 20,
    color: Colors.White,
    fontWeight: "bold",
    textAlign: "center",
    width: "45%",
  },
  artistInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    gap: 15,
    width: "40%",
  },

  artContainer: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  done: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
  },

  subText: {
    color: Colors.White,
    fontSize: 13,
    fontWeight: 400,
    textAlign: "center",
  },

  noMoreEntries: {
    color: Colors.White,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    height: 45,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
});
