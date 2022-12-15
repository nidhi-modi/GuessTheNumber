import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import BackgroundGradient from '../components/Background';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButtom from '../components/ui/PrimaryButtom';

const GameOverScreen = ({route, navigation}) => {
  const {userEnteredValue, guessRoundsNo} = route.params;
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/success.png')}
          />
        </View>

        <View>
          <Text style={styles.generalText}>
            Your phone needed{' '}
            <Text style={styles.textStyle}>{guessRoundsNo}</Text> rounds to
            guess the number{' '}
            <Text style={styles.textStyle}>{userEnteredValue}</Text>
          </Text>
        </View>
        <PrimaryButtom onPress={() => navigation.navigate('StartGameScreen')}>
          Start New Game
        </PrimaryButtom>
      </View>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },

  textStyle: {
    fontWeight: 'bold',
    color: Colors.primary500,
  },

  generalText: {
    color: Colors.black,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },

  imageStyle: {
    width: '100%',
    height: '100%',
  },

  imageContainer: {
    borderRadius: 150,
    width: 300,
    overflow: 'hidden',
    margin: 36,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
});

export default GameOverScreen;
