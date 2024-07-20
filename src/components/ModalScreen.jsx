

import React from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { styles } from '../styles/estilos';


export const ModalScreen = ({ mensaje, modalStatus, setModalStatus = '' }) => {


    const onPressButton = () => {
        setModalStatus( false );
    };

  return (
    <Modal 
        transparent={true}
        visible={ modalStatus }
        animationType={'fade'}
    >
        <View style={ styles.centeredView }>
            <View style={ styles.modalView }>

                <Text>{ mensaje[0] }</Text>
                <Text>{ mensaje[1] }</Text>
                <Pressable
                    style={ styles.button }
                    onPress={ onPressButton }
                >
                    <View style={ styles.buttonText }>
                        <Text >{ mensaje[2]}</Text>
                    </View>
                    
                </Pressable>

            </View>
        </View>
        
    </Modal>
    
  )
}


