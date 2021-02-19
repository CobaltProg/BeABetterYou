import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import env from '../env';

export default function RoundedButton({ text, action, icon }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={action}>
      {icon}
      <Text style={{color: env.colors.SecondaryText, marginLeft: 20}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
  }
});