import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface IHeader {
  amountSpent: number;
  resetExpenses: () => void;
}

const Header = ({amountSpent, resetExpenses}: IHeader) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.subtitle}>Today you spent</Text>
        <Button title={'Reset'} onPress={resetExpenses} />
      </View>
      <View>
        <Text style={styles.title}>Rs. {amountSpent}</Text>
      </View>
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
