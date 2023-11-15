import { StyleSheet } from 'react-native'
import { Colors } from '../../Utils/Colors'

export const styles = StyleSheet.create({
    
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

      modalView: {
        margin: 20,
        backgroundColor: '#141617',
        borderRadius: 20,
        padding: 15,
        paddingBottom: 22,
        alignItems: 'center',
        shadowColor: '#000',
        width: '80%',
        aspectRatio: 16/15,
        gap:7,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.White,
        fontSize: 17,
        fontWeight: 700,
      },

      modalImage: {
        height: '65%'
      },

      modalButtons:{
        width: '100%',
        height: 45
      }
})