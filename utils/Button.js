import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import env from '../env';

export default function Button({ text, action, styleMode }) {
  return styleMode == 'Secondary' ? (
    <TouchableOpacity
      style={styles.container}
      onPress={action}>
      <Text style={{color: env.colors.SecondaryText}}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.container}
      onPress={action}>
      <Text style={{color: env.colors.SecondaryText}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: env.colors.Main,
    width: '80%',
    marginVertical: 20
  }
});