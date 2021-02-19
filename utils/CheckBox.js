import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import env from '../env';

import { AntDesign } from '@expo/vector-icons';

export default function CheckBox({ title, action }) {
  return (
    <TouchableOpacity style={styles.Container} onPress={action}>
      <AntDesign name="checkcircleo" size={24} color={env.colors.Main} style={{marginRight: 20}} />
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    borderColor: env.colors.BorderColor,
    borderWidth: 2,
    borderRadius: 100,
    padding: 15,
    margin: 10
  },
  Title: {
    color: env.colors.CheckBoxText,
    fontWeight: 'bold',
    fontSize: 18
  }
});