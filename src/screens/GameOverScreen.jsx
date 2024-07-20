import { Text, View, Button } from "react-native"



export const GameOverScreen = ( { setPantallaActiva, numeroElegido } ) => {

  const onPressBackButton = () => {
    setPantallaActiva('EnterNumber');
  }
  return (
    <View>
      <Text>GameOverScreen</Text>
      <Text>Habías elegido el</Text>
      <Text>número { numeroElegido }</Text>
      <Text>He necesitado { numeroElegido } para adivinarlo</Text>
      <Button
                title='Empezar de nuevo'
                onPress={ onPressBackButton }
            />
    </View>
    
  )
}
