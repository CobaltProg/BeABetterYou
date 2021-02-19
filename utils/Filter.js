import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import env from '../env';

export default function Filter({ text, action }) {
  const [count, setCount] = useState(0);

  return count == 1 ? (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: env.colors.Main, borderColor: 'rgba(0,0,0,0)'}]}
      onPress={() => { action; setCount(0) }}>
      <Text style={{color: '#fff'}}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.container, { borderColor: env.colors.BorderColor }]}
      onPress={() => { action; setCount(1) }}>
      <Text style={{color: '#000'}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 100,
    borderWidth: 2,
    margin: 5
  }
});