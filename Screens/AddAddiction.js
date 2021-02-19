import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '../utils/CheckBox';

export default function AddAddiction({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sur quelle addiction souhaitez-vous vous fixer de nouveaux objectifs ?</Text>
      <View style={{width: '100%', alignItems:'center', justifyContent: 'center'}}>
      <CheckBox title="Le sucre" action={() => navigation.navigate('SecondaryNavigation', { screen: 'Objectifs' })} />
      <CheckBox title="Le tabac" action={() => navigation.navigate('SecondaryNavigation', { screen: 'Objectifs' })} />
      <CheckBox title="Les aliments gras" action={() => navigation.navigate('SecondaryNavigation', { screen: 'Objectifs' })} />
      <CheckBox title="Les réseaux sociaux" action={() => navigation.navigate('SecondaryNavigation', { screen: 'Objectifs' })} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20
  }
});