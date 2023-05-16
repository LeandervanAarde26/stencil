import { StyleSheet } from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#141617",
        borderRadius: 12,
        borderColor: Colors.White,
        borderWidth: 4
    },

    inner:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        gap: 10
    },
    image:{
        justifyContent: 'center',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 9
    },
    pressed:{
        flex: 1,
        backgroundColor: "#141617",
        borderRadius: 12,
        borderColor: Colors.secondary,
        borderWidth: 4
    }, 
    addButton:{
        color: Colors.White,
        fontSize: 22
    }
    
});

{/* <Text style={styles.heading}>Your Entry</Text> */}