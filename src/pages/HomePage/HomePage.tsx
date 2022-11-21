import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/Header/Header';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem';
import AddExpense from '../../components/AddExpense/AddExpense';
import useExpenses, {Expense} from '../../hooks/useExpenses';

const HomePage = () => {
  const {expenses, addExpense, totalExpenditure} = useExpenses();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header amountSpent={totalExpenditure} />
      </View>
      <ScrollView style={styles.expenses}>
        {expenses.map((expense: Expense) => (
          <ExpenseItem {...expense} key={expense.time} />
        ))}
      </ScrollView>
      <View style={styles.newExpense}>
        <AddExpense registerExpense={addExpense} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {},
  expenses: {},
  newExpense: {
    padding: 20,
  },
  text: {
    color: '#fff',
  },
});
export default HomePage;
