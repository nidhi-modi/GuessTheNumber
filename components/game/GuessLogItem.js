import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../constants/Colors';

function GuessLogItem({roundNumber, guessNumber}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textComponent}>#{roundNumber}</Text>
      <Text style={styles.textComponent}>Opponent's Guess: {guessNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    width: '100%',
    elevation: 6,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  textComponent: {
    fontWeight: 'bold',
  },
});

export default GuessLogItem;
