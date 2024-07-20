import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: '#ffdab9'
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 2,
    },
    buttonText: {
        backgroundColor: '#ff7f50',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        elevation: 10
    },
    textInput: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 20,
        // paddingVertical: 50
      },
      rondaAdivinacionContainer: {
        backgroundColor: 'red',
        width: '100%',
        height: '80%',
        margin: 50,
        // flex: 1,
        alignContent: 'space-between',
        alignItems: 'center'
      },
      elegido: {
        marginBottom: 80,
        backgroundColor: 'red',
        width: '100%'
      },
      intentos: {
        // flex: 3,
        width: '80%',
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginBottom: 30,
        // height:'60%',
        backgroundColor: '#ffc0cb',
        borderRadius: 10
        // alignSelf: 'center'
      },
      mayorMenor: {
        height: 'auto',
        width: 'auto',
        // backgroundColor: 'red',
        // alignContent: 'center',
        alignItems: 'center'
        // flex: 1,
        // height: 100,
        // width: 200
      },
      botones: {
        width: '50%',
      //  backgroundColor: '#dda0dd',
      //  alignContent: 'center',
      //  justifyContent: 'center',
        alignItems: 'center'
        
      }
})