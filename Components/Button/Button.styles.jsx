import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const buttonStyles = StyleSheet.create({
  text: {
    color: Colors.White,
    // fontWeight: 500,
    fontSize: 15,
  },

  button: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    maxHeight: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  primary: {
    backgroundColor: Colors.secondary,
  },
  primaryOutline: {
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  secondary: {
    backgroundColor: Colors.tertiary,
  },

  secondaryOutline: {
    borderColor: Colors.tertiary,
    borderWidth: 2,
  },

  pressedIos: {
    opacity: 0.75,
  },

  danger: {
    backgroundColor: Colors.Danger,
  },

  success: {
    backgroundColor: Colors.Success,
  },
});
