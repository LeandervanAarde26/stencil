import { StyleSheet, Text, View } from 'react-native'
import { Colors } from './Colors'

export const TextStyles = StyleSheet.create({
    headingOne:{
        color: Colors.White,
        // fontWeight: "bold",
        fontSize: 28,
    },

    headingTwo: {
        color: Colors.White,
        // fontWeight: "bold",
        fontSize: 24,
    },

    headingThree:{
        fontSize: 22,
        color: Colors.White,
        // fontWeight: "bold",
        // textAlign: "center",
        marginBottom: 15,
    },

    headingFour:{
        fontSize: 20,
        color: Colors.White,
        // fontWeight: "bold",
        // textAlign: "center",
        marginBottom: 20,
    },

    headingFive:{
        fontSize: 18,
        color: Colors.White,
        // fontWeight: "bold",
        // textAlign: "center",
        marginBottom: 20,
    },

    body:{
        color: Colors.White,
        // fontWeight: 400,
        fontSize: 14,
        lineHeight: 22
    },

    smallText:{
        color: Colors.White,
        // fontWeight: "600",
        fontSize: 12,
    },
})