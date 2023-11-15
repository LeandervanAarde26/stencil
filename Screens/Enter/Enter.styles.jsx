import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({
    container:{
        flex: .9,
        // maxHeight: 200,
        backgroundColor: Colors.primary,
        paddingTop: 20,
        paddingHorizontal: 15,
        gap: 10,
    },
    container2:{
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 20,
        paddingHorizontal: 15,
        gap: 15,
    },


    heading:{
        color: Colors.White,
        fontSize: 24,
        fontWeight: 'bold',
    },

    pickerContainer:{
    height: 75,
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
    
    buttonContainer:{
        height: 60,
  
    },
    
  label: {
    fontSize: 13,
    color: Colors.White,
    marginBottom: -6
  },

})