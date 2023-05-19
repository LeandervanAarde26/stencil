import { StyleSheet  } from 'react-native'
import { Colors } from '../../Utils/Colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 30,
        // paddingHorizontal: 20,
    },
    informationContainer:{
        flex: 0.4
    },

    buttonContainer:{
        height: 50
    },

    innerContainer:{
     flex: 0.7, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30


    //  backgroundColor : 'red'
    }


})