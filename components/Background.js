import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GeneralStatusBarColor from './GeneralStatusBarColor ';
import Colors from '../constants/Colors';

const Background = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor={Colors.primary700}
        barStyle="light-content"
      />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.linearGradient}>
        <ImageBackground
          source={require('../assets/background.png')}
          resizeMode="cover"
          style={styles.linearGradient}
          imageStyle={styles.backgroundImage}>
          {children}
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});

export default Background;
