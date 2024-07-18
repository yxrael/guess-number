

import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { ModalScreen } from '../components/ModalScreen';


export const EnterNumberScreen = ({
        modalStatus,
        setModalStatus,
        mensajeModal,
        setMensajeModal,
        setPantallaActiva }) => {

    const [text, setText] = useState('');
    const onChangeText = (texto) => {
        setText(texto);
    }

    const onPressButton = () => {
        const choosenNumber = parseInt( text, 10 );
        if( !choosenNumber || choosenNumber === 'Nan' ) return;
        if( choosenNumber < 1 || choosenNumber > 99 ) {
            setMensajeModal('Debe ser entre 1 y 99');
            setModalStatus( true ); 
        } else {
            console.log( choosenNumber );
            setPantallaActiva('OpponentGuess')
        }
}

    const onKeyPress = (key) => {
        console.log(key)
    }

  return (
    <View>
        <Text>Piensa un número entre 1 y 99</Text>
        <TextInput
            onKeyPress={ onKeyPress }
            style={ styles.textInput }
            onChangeText={ onChangeText }
            value={ text }
            placeholder='Elige un número'
            // inputMode='numeric'
            keyboardType='numeric'
            maxLength={ 2 }
        />
        <View>
            <Button
                title='OK'
                onPress={ onPressButton }
            />
        </View>
        <ModalScreen 
            mensaje={ mensajeModal }
            modalStatus={ modalStatus }
            setModalStatus={ setModalStatus }
        />
    </View>
  )
};

const styles = StyleSheet.create ({
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    } 
})
