import { StyleSheet  } from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: Colors.primary,    
    },

    bottomContainer:{
        flex: 1,
        backgroundColor: Colors.primary,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        padding: 15,
        paddingBottom: 40,
        gap: 15,

    }, 

    image:{
        flex: 1,
    },

    imageContainer:{
        flex: 0.4,
        maxHeight: 260,
        justifyContent:'center',
        alignItems: 'center',
        gap: 8,
        paddingTop: 15,
    },

    pressed:{
        opacity: 0.75
    }, 

    
    sectionHeader:{
        fontSize: 21,
        color: Colors.White,
        // fontWeight: '600',
        paddingVertical: 10
    },

    profileImage:{
        width: 125,
        height: 125,
        borderRadius: 62.5,
        borderWidth: 3, 
        borderColor: Colors.White
    },

    name: {
        color: Colors.White,
        textAlign: 'center',
        fontSize: 24,
        // fontWeight: '600'
    },

    role:{
        color: Colors.secondary,
        fontSize: 15,
    }

})