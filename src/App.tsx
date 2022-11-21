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
    height: '100%',
    paddingTop: 32,
    paddingHorizontal: 14,
    backgroundColor: '#000000',
  },
});

export default App;
