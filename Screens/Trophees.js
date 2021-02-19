import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Trophees() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Vous n'avez aucun trophées car la vie c'est pas un kiwi</Text>
    </View>
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