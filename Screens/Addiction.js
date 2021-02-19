import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import env from '../env';
import Card from '../utils/Card';
import CheckBox from '../utils/CheckBox';

export default function Accueil({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="Votre progression sur :" content={
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
          <Text style={styles.addiction}>Le sucre</Text>
          <Text>content</Text>
        </View>} />
      <View>
        <Card title="Temps d'abstinence :" content={<Text>progressBar</Text>} />
        <Card title="Argent économisé :" content={<Text>progressBar</Text>} />
        <Card title="Trophées :" content={<Text>progressBar</Text>} />
      </View>
      <Card title="Avez-vous atteind vos objectif ?" content={<Content />} />
    </ScrollView>
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
      <Text style={{color: env.colors.SecondaryText}}>5/5 atteints</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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