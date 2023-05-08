import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: Colors.White,
    borderRadius: 10,
    // maxHeight: 48, 
    backgroundColor: "#3E454D"
 
  },

  label: {
    fontSize: 13,
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
