import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Title = ({children}) => {
  return <Text style={styles.titleText}>{children}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
export default Title;
