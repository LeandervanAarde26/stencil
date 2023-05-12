import { StyleSheet} from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({


    heading: {
        fontSize: 22,
        color: Colors.White,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    indicator:{
        color: Colors.secondary,
        fontSize: 13,
        fontWeight: '500'
    },
    timer:{
        color: Colors.White,
        fontSize: 40,
        fontWeight: 'bold'
      },
    
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10
    },

    timeIndicator:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    timeContainer:{
        flexDirection: 'row',
        gap: 20
    }
})