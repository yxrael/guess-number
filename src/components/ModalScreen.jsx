


import React from 'react'
import { Button, Modal, Text, View } from 'react-native'


export const ModalScreen = ({ mensaje, modalStatus, setModalStatus }) => {


    const onPressButton = () => {
        setModalStatus( false )
    };


  return (
    <Modal 
        visible={ modalStatus }
    >
        <Text>{ mensaje }</Text>
        <View>
            <Button
                title='OK'
                onPress={ onPressButton }
            />
        </View>
    </Modal>
    
  )
}
