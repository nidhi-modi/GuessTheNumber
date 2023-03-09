import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  LogBox,
  Alert,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import BackgroundGradient from '../components/Background';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButtom';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({route, navigation}) => {
  const {enteredValue} = route.params;
  const initialGuess = generateRandomBetween(1, 100, enteredValue);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === enteredValue) {
      navigation.navigate('GameOverScreen', {
        userEnteredValue: enteredValue,
        guessRoundsNo: guessRounds.length,
      });
    }
  }, [currentGuess, enteredValue]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    //lower or higher

    if (
      (direction === 'lower' && currentGuess < enteredValue) ||
      (direction === 'greater' && currentGuess > enteredValue)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandNumber);
    setGuessRounds(prevGuessRounds => [newRandNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <BackgroundGradient>
      <ScrollView nestedScrollEnabled={true}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
              <InstructionText style={styles.instText}>
                Higher or lower?
              </InstructionText>
              <View style={styles.buttonContainer}>
                <View style={styles.flexButtons}>
                  <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color={Colors.white} />
                  </PrimaryButton>
                </View>
                <View style={styles.flexButtons}>
                  <PrimaryButton
                    onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color={Colors.white} />
                  </PrimaryButton>
                </View>
              </View>
            </Card>
            <View style={styles.listContainer}>
              <FlatList
                scrollEnabled={true}
                data={guessRounds}
                renderItem={itemData => (
                  <GuessLogItem
                    roundNumber={guessRoundsListLength - itemData.index}
                    guessNumber={itemData.item}
                  />
                )}
                keyExtractor={item => item}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 12,
    alignItems: 'center',
  },

  listContainer: {
    padding: 16,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  instText: {
    marginBottom: 15,
  },

  flexButtons: {
    flex: 1,
  },
});

export default GameScreen;
