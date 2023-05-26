import { Colors } from "../../Utils/Colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },

  image: {
    alignSelf: "center",
    aspectRatio: 16 / 9,

    resizeMode: "contain",
  },

  inputContainer: {
    gap: 15,
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "center",
  },

  line: {
    borderBottomColor: Colors.White,
    borderBottomWidth: 2,
    width: "23%",
  },
  hintText: {
    color: Colors.White,
    fontSize: 13,
  },

  label: {
    fontSize: 13,
    color: Colors.White,
    marginBottom: -10
  },

  pickerContainer:{
    height: 50,
    backgroundColor: "#3E454D",
    overflow: 'scroll',
    justifyContent: 'center',
    borderRadius: 9,
    borderWidth: 2, 
    borderColor: 'black'

    },

    picker:{
        color: Colors.White,
    }, 

  buttonsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 15,
  },
});
