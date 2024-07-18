import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EnterNumberScreen } from './src/screens/EnterNumberScreen';
import OpponentGuessScreen from './src/screens/OpponentGuessScreen';
import { GameOverScreen } from './src/screens/GameOverScreen';



export default function App() {

  // ['EnterNumber', 'GameOver','OpponentGuess']
  const [pantallaActiva, setPantallaActiva] = useState('EnterNumber');
  // const [gameStarted, setGameStarted] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');

  // useEffect(() => {
  //   if( gameStarted === false ) setPantallaActiva('EnterNumber');
  // }, [gameStarted])
  
  
  return (
    <View style={styles.container}>
      {
        (pantallaActiva === 'EnterNumber') && 
          <EnterNumberScreen
            modalStatus={ modalStatus }
            setModalStatus={ setModalStatus }
            mensajeModal={ mensajeModal }
            setMensajeModal={ setMensajeModal }
            setPantallaActiva={ setPantallaActiva }
            />
      }

      {
        (pantallaActiva === 'OpponentGuess') && 
          <OpponentGuessScreen 
          setPantallaActiva={ setPantallaActiva }  
          />
      }

      {
        (pantallaActiva === 'GameOver') && <GameOverScreen />
      }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
