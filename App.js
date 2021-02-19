import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from './Navigation';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
