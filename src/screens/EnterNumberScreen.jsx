

import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { styles } from '../styles/estilos';



export const EnterNumberScreen = ({
        setModalStatus,
        setMensajeModal,
        setPantallaActiva,
        setNumeroElegido   
}) => {

    const [text, setText] = useState('');

    const onChangeText = (texto) => {
        setText(texto);
    }

    const onPressButton = () => {
        const choosenNumber = parseInt( text, 10 );
        if( !choosenNumber || Number.isNaN(choosenNumber) ) {
            setMensajeModal(['Debe ser un número entre 1 y 99','','Entendido']);
            setModalStatus( true );
            return
        };
        if( choosenNumber < 1 || choosenNumber > 99 ) {
            setMensajeModal(['Debe ser entre 1 y 99','','Entendido']);
            setModalStatus( true ); 
        } else {
            setNumeroElegido(choosenNumber);
            setPantallaActiva('OpponentGuess')
        }
}

  return (
    <View style={ styles.centeredView }>
        <View style={ styles.modalView }>
            <Text>Piensa un número entre 1 y 99</Text>
            <TextInput
                style={ styles.textInput }
                onChangeText={ onChangeText }
                value={ text }
                placeholder='Elige un número'
                keyboardType='numeric'
                maxLength={ 2 }
            />
            <View>
                
                <Pressable
                  style={ styles.button }
                  onPress={ onPressButton }
                >
                    <View style={ styles.buttonText }>
                        <Text >OK</Text>
                    </View>
                    
                </Pressable>
            </View>
        </View>
    </View>
  )
};


