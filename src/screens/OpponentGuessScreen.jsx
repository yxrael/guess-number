import { Button, View, Text } from "react-native"




const OpponentGuessScreen = ({ setPantallaActiva, numeroElegido }) => {


    const onPressButton = () => {
        setPantallaActiva('EnterNumber');
    }

  return (
    <View>
            <Text>Número elegido: { numeroElegido }</Text>
            <Button
                title='Back'
                onPress={ onPressButton }
            />
        </View>
  )
}

export default OpponentGuessScreen