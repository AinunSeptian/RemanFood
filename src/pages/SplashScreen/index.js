import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
      <View style={{height: 38}} />
      <Text style={styles.title}>RemanFood</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffc700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
