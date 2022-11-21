import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Today you spent</Text>
      <Text style={styles.title}>Rs. 2000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  subtitle: {fontSize: 24},
  title: {
    fontSize: 50,
    fontWeight: '600',
  },
});

export default Header;
