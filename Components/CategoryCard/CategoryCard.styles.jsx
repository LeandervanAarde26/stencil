import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
        cardContainer:{
            flex: 1,
            height: 220,
            backgroundColor: 'black',
            margin: 14,
            elevation: 3,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 12
        },

        image:{
            width: '100%',
            height: '60%',
            resizeMode: 'contain'
        }
})