import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../constants/Colors';

const PrimaryButtom = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.pressedButton, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

//72063c
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: 'hidden',
    elevation: 2,
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },

  buttonText: {
    textAlign: 'center',
    color: Colors.white,
  },

  pressedButton: {
    opacity: 0.75,
  },
});

export default PrimaryButtom;
