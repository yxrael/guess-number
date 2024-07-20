import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EnterNumberScreen } from './src/screens/EnterNumberScreen';
import OpponentGuessScreen from './src/screens/OpponentGuessScreen';
import { GameOverScreen } from './src/screens/GameOverScreen';
import { ModalScreen } from './src/components/ModalScreen';



export default function App() {

  // ['EnterNumber', 'GameOver','OpponentGuess']
  const [pantallaActiva, setPantallaActiva] = useState('EnterNumber');

  const [modalStatus, setModalStatus] = useState(false);
  const [mensajeModal, setMensajeModal] = useState(['','','']);
  const [numeroElegido, setNumeroElegido] = useState(null);

  return (
    <View style={styles.container}>

        <ModalScreen 
            mensaje={ mensajeModal }
            modalStatus={ modalStatus }
            setModalStatus={ setModalStatus }
        />
      {
        (pantallaActiva === 'EnterNumber') && 
          <EnterNumberScreen
            modalStatus={ modalStatus }
            setModalStatus={ setModalStatus }
            mensajeModal={ mensajeModal }
            setMensajeModal={ setMensajeModal }
            setPantallaActiva={ setPantallaActiva }
            setNumeroElegido={ setNumeroElegido }
            />
      }

      {
        (pantallaActiva === 'OpponentGuess') && 
          <OpponentGuessScreen 
          setPantallaActiva={ setPantallaActiva }
          numeroElegido={ numeroElegido }
          setMensajeModal={ setMensajeModal }
          setModalStatus={ setModalStatus }  
          />
      }

      {
        (pantallaActiva === 'GameOver') &&
          <GameOverScreen
          numeroElegido={ numeroElegido }
          setPantallaActiva={ setPantallaActiva }
          />
      }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdab9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
