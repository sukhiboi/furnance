import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ExpenseMeta} from '../../hooks/useExpenses';

const ExpenseItem = ({reason, amount}: ExpenseMeta) => (
  <View style={styles.container}>
    <View style={styles.reason}>
      <Text style={[styles.text]}>{reason}</Text>
    </View>
    <View style={styles.amount}>
      <Text style={[styles.text, {fontWeight: '600', textAlign: 'right'}]}>
        {amount}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 8,
    backgroundColor: '#333333',
    padding: 12,
    marginTop: 12,
  },
  reason: {
    flex: 6,
  },
  amount: {
    flex: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default ExpenseItem;
