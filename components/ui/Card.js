import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
});

export default Card;
