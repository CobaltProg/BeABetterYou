import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardIcon from '../utils/CardIcon';
import Card from '../utils/Card';
import env from '../env';

import { MaterialIcons } from '@expo/vector-icons';

export default function Traitements({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="Cures et traîtements" content={<Content />} />
      <Liste liste={lostraitementos} navigation={navigation} />
    </ScrollView>
  );
}

function Content () {
  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Contacter des structures médicales spécialisées pour vous accompagner</Text>
      <View style={styles.iconContainer}>
        <MaterialIcons name="local-hospital" size={50} color="#E03D41" />
      </View>
    </View>
  )
}

function Liste ({ liste, navigation }) {
  return (
    <View>
      { liste.map((elm, i) => {
          return <Traitement elm={elm} key={i} navigation={navigation} />
        })}
    </View>
  );
}

function Traitement({ elm, navigation }) {
  return (
    <CardIcon 
      title={elm.title} 
      icon={<MaterialIcons name="local-hospital" size={24} color={env.colors.SecondaryBg} />} 
      desc={elm.desc} 
      action={() => { navigation.navigate('Lieux')}} />
  );
}

const lostraitementos = [
  {
    title: "Hypnothérapie",
    desc: "Des spécialistes sont prêts à vous accompagner"
  },
  {
    title: "Acupuncture",
    desc: "Des spécialistes sont prêts à vous accompagner"
  },
  {
    title:  "Atelier thérapeutique",
    desc: "Des spécialistes sont prêts à vous accompagner"
  },
  {
    title: "Sophrologie",
    desc: "Des spécialistes sont prêts à vous accompagner"
  }
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
  }
});