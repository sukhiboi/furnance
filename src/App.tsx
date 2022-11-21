import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
});

export default App;
