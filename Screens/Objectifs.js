import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import env from '../env';
import Card from '../utils/Card';
import CheckBox from '../utils/CheckBox';
import RoundedButton from '../utils/RoundedButton';
import { AntDesign } from '@expo/vector-icons';

export default function Objectifs({ navigation }) {
  return (
    <View style={styles.container}>
      <Card title="Modifiez vos objectif sur le Sucre" content={<Content />} />
    </View>
  );
}

function Content() {
  return (
    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <CheckBox title="Eviter les chocolats" />
      <CheckBox title="Eviter les bonbons" />
      <CheckBox title="Reduire le nombre de canettes" />
      <CheckBox title="Faire plus de wingsuit" />
      <CheckBox title="Boire 1L d'eau" />
      <RoundedButton 
        text="Ajouter" 
        icon={<AntDesign name="pluscircleo" size={24} color={env.colors.SecondaryText} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addiction: {
    borderRadius: 100,
    backgroundColor: env.colors.Main,
    color: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10
  }
});