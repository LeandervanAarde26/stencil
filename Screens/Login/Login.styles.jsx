import { StyleSheet} from 'react-native';
import { Colors } from '../../Utils/Colors';

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
    
      buttonsContainer: {
        flex: 1,
        paddingHorizontal: 15,
        gap: 15,
      },
})