 import { Button, View, Text, FlatList, StyleSheet } from "react-native"
import { getRandomNumber } from "../helpers/getRandomNumber";
import { useEffect, useMemo, useState, useCallback } from "react";

let min = 1;
let max = 99
let guessNumber;
const chancesNumber = 10;


const OpponentGuessScreen = ({ setPantallaActiva, numeroElegido }) => {

  const [listOfGuess, setListOfGuess] = useState([]);


  
  // const guessNumber = useCallback(() => getRandomNumber( min, max ), []);
   

  // console.log(listOfGuess)

  useEffect(() => {
    guessNumber = getRandomNumber( min, max );
    console.log('Tu número es ', guessNumber);
    setListOfGuess( [ ...listOfGuess, { number: guessNumber, id: Math.random() } ])
  }, []);

 
    const onPressBackButton = () => {
        setPantallaActiva('EnterNumber');
    }

    const onPressTryButton = () => {
      guessNumber = getRandomNumber( min, max );
      console.log(guessNumber)
      setListOfGuess( [ ...listOfGuess, { number: guessNumber, id: Math.random() } ]);
      // setListOfGuess( [...listOfGuess, { number: guessNumber, id: Math.random() }]);
      console.log(listOfGuess);
    }

    const onPressHigherLowerButton = (params) => {
      switch (params) {
        case 'higher':
          console.log('Higher than: ', guessNumber );
          guessNumber = getRandomNumber( guessNumber, max );
          setListOfGuess( [ ...listOfGuess, { number: guessNumber, id: Math.random() } ]);
          console.log('Nuevo: ', guessNumber);
          break;
        case 'lower':
          console.log('Lower than: ', guessNumber );
          guessNumber = getRandomNumber( min, guessNumber );
          setListOfGuess( [ ...listOfGuess, { number: guessNumber, id: Math.random() } ]);
          console.log('Nuevo: ', guessNumber);
          break;
        
        default:
          break;
      }
    }

  return (
    <View style={ styles.container }>
      <View style={ styles.elegido }>
        <Text>(Número elegido: { numeroElegido })</Text>
      </View>

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
            <Button
                title='Es mayor'
                onPress={ () => onPressHigherLowerButton('higher') }
            />
            <Button
                title='Es menor'
                onPress={ () => onPressHigherLowerButton('lower') }
            />

        
      </View>

      <View>
            {
              ( listOfGuess.length > 0 ) && (
                <>
                  {/* <Text>Tu número es el { guessNumber }</Text> */}
                  <Text>Nº de intentos: { listOfGuess.length }</Text>
                </>
              )
            }
            <Button
                title='Back'
                onPress={ onPressBackButton }
            />

        
      </View>

            
            {/* <Button
                title='Déjame intentar'
                onPress={ onPressTryButton }
            /> */}

           

            
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: 'pink',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    margin: 20,
    paddingVertical: 50
  },
  elegido: {
    marginBottom: 80,
    backgroundColor: 'red',
    width: '100%'
  },
  intentos: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green'
    // alignSelf: 'center'
  },
  mayorMenor: {
    // flex: 1,
    flexDirection: 'row',
    // height: 100,
    // width: 200
  }
});

export default OpponentGuessScreen

