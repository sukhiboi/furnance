import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IHeader {
  amountSpent: number;
}

const Header = ({amountSpent}: IHeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Today you spent</Text>
      <Text style={styles.title}>Rs. {amountSpent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  subtitle: {fontSize: 24, color: '#ffffff'},
  title: {
    fontSize: 50,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Header;
