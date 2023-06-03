import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // paddingRight: 10,
    gap: 15,
    backgroundColor: Colors.primary
  },
  container2: {
    flex: 1,
    paddingVertical: 20,
  },

  containerAlt:{
    flex: 1,
    paddingTop: 20,
    // paddingRight: 10,
    gap: 15,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
