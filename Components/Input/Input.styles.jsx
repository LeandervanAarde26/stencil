import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    borderColor: Colors.White,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Colors.White,
    borderRadius: 10,
  },

  label: {
    fontSize: 14,
    color: Colors.White,
  },

  errorLabel: {
    color: Colors.Danger,
  },

  errorInput: {
    borderColor: Colors.Danger,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Colors.White,
    borderRadius: 10,
  },

  activeLabel: {
    color: Colors.tertiary,
    fontSize: 16,
  },

  activeInput: {
    borderColor: Colors.tertiary,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Colors.White,
    borderRadius: 10,
  },
});
