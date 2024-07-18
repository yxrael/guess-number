import { Button, View } from "react-native"




const OpponentGuessScreen = ({ setPantallaActiva }) => {


    const onPressButton = () => {
        setPantallaActiva('EnterNumber');
    }

  return (
    <View>
            <Button
                title='Back'
                onPress={ onPressButton }
            />
        </View>
  )
}

export default OpponentGuessScreen