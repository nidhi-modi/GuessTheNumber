import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import PrimaryButtom from '../components/ui/PrimaryButtom';
import BackgroundGradient from '../components/Background';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import {useIsFocused} from '@react-navigation/native';

const StartGameScreen = ({props, navigation}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const isFocused = useIsFocused();

  const numberInputHandler = numberValue => {
    setEnteredNumber(numberValue);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            onPress: resetInputHandler,
            style: 'destructive',
          },
        ],
      );

      return;
    }

    navigation.navigate('GameScreen', {enteredValue: chosenNumber});
  };

  useEffect(() => {
    // Call only when screen open or when back on screen
    if (isFocused) {
      resetInputHandler();
    }
  }, [props, isFocused]);

  return (
    <BackgroundGradient>
      <SafeAreaView>
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={numberInputHandler}
              autoCorrect={false}
              value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.flexButtons}>
                <PrimaryButtom onPress={resetInputHandler}>Reset</PrimaryButtom>
              </View>
              <View style={styles.flexButtons}>
                <PrimaryButtom onPress={confirmButtonHandler}>
                  Confirm
                </PrimaryButtom>
              </View>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: 'center',
  },

  numberInput: {
    height: 55,
    fontSize: 32,
    width: 55,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  flexButtons: {
    flex: 1,
  },
});

export default StartGameScreen;
