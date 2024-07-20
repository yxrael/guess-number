 import { Button, View, Text, FlatList, Pressable } from "react-native"
import { getRandomNumber } from "../helpers/getRandomNumber";
import { useEffect, useState } from "react";
import { styles } from "../styles/estilos";

let min = 1;
let max = 99
let guessNumber;
const chancesNumber = 10;


const OpponentGuessScreen = ({ setPantallaActiva, numeroElegido, setMensajeModal, setModalStatus }) => {

  const [listOfGuess, setListOfGuess] = useState([]);

  useEffect(() => {
    newNumber( min, max );
  }, []);

    const onPressBackButton = () => {
        setPantallaActiva('EnterNumber');
    }


    const onPressHigherLowerButton = (highLow) => {
      switch (highLow) {
        case 'higher':
          if( guessNumber > numeroElegido ) {
            setMensajeModal(['¿Estás seguro de que es mayor?','','Me has pillado']);
            setModalStatus( true );
            break
          }
          min = (listOfGuess[ listOfGuess.length -1].number) +1;
          newNumber( min, max );
          break;
        case 'lower':
          if( guessNumber < numeroElegido ) {
            setMensajeModal(['¿Estás seguro de que es menor?','','Me has pillado']);
            setModalStatus( true );
            break
          }
          max = (listOfGuess[ listOfGuess.length -1].number) -1;
          newNumber( min, max );
          break;
        
        default:
          break;
      }
    }

    const newNumber = ( min, max) => {
      guessNumber = getRandomNumber( min, max );
      setListOfGuess( [ ...listOfGuess, { number: guessNumber, id: Math.random() } ]);
      if( guessNumber === numeroElegido ){
        nuevoJuego();
      }
    }

    const nuevoJuego = () => {
      min = 1;
      max = 99;
      setMensajeModal([`Habías elegido el nº ${ numeroElegido }`,`He necesitado ${ listOfGuess.length } intentos`, 'Jugar de nuevo']);
      setModalStatus( true );
      // setPantallaActiva('GameOver');
    }
// style={ styles.container }
  return (
    <View >

      <View style={ styles.intentos }>
            {
              (listOfGuess.length > 0 ) &&
                <FlatList
                  data={ listOfGuess }
                  keyExtractor={ ( item ) => item.id.toString() }
                  renderItem={ ({item} ) => <Text>Creo que es el: { item.number }</Text>}
                />
            }
      </View>
      <View style={ styles.mayorMenor }>
        <View style={ styles.botones }>

            <Pressable
                  style={ styles.button }
                  onPress={ () => onPressHigherLowerButton('higher') }
            >
                  <View style={ styles.buttonText }>
                      <Text >Es mayor</Text>
                  </View>
                  
            </Pressable>
            <Pressable
                  style={ styles.button }
                  onPress={ () => onPressHigherLowerButton('lower') }
            >
                  <View style={ styles.buttonText }>
                      <Text >Es menor</Text>
                  </View>
                  
            </Pressable>
        </View>
            
      </View>

      <View>
            {
              ( listOfGuess.length > 0 ) && (
                <>
                  <Text>Nº de intentos: { listOfGuess.length }</Text>
                </>
              )
            }
            <Button
                title='Back'
                onPress={ onPressBackButton }
            />
   
      </View>
    
    </View>
  )
}



export default OpponentGuessScreen

