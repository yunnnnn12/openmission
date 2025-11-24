import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <MainScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdfdfd' },
  header: { fontSize: 32, fontWeight: 'bold', paddingLeft: 20, marginVertical: 10 },
});

export default App;
