import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EnterNumberScreen } from './src/screens/EnterNumberScreen';
import OpponentGuessScreen from './src/screens/OpponentGuessScreen';
import { GameOverScreen } from './src/screens/GameOverScreen';
import { ModalScreen } from './src/components/ModalScreen';



export default function App() {

  // ['EnterNumber', 'GameOver','OpponentGuess']
  const [pantallaActiva, setPantallaActiva] = useState('EnterNumber');
  // const [gameStarted, setGameStarted] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [mensajeModal, setMensajeModal] = useState(['','','']);
  const [numeroElegido, setNumeroElegido] = useState(null);

  // useEffect(() => {
  //   if( gameStarted === false ) setPantallaActiva('EnterNumber');
  // }, [gameStarted])
  
  
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
