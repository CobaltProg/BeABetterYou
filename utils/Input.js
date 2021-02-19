import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import env from '../env';

export default function Button({ placeholder, type, hidden }) {
  const [value, onChangeText] = React.useState(placeholder);
  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
      autoCompleteType={type}
      secureTextEntry={hidden ? hidden : false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: env.colors.BorderColor,
    borderWidth: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 100,
    width: '80%',
    marginVertical: 10
  }
});