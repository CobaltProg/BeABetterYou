import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardIcon from '../utils/CardIcon';
import Card from '../utils/Card';
import env from '../env';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Lieux() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="Cabinets d'hypnothérapie" content={<Content />} />
      <Liste liste={lieux} />
    </ScrollView>
  );
}

function Content () {
  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center'}}>Contacter des structures médicales spécialisées pour vous accompagner</Text>
    </View>
  )
}

function Liste ({ liste }) {
  return (
    <View>
      { liste.map((elm, i) => {
          return <Lieu elm={elm} key={i} />
        })}
    </View>
  );
}

function Lieu({ elm }) {
  return (
    <CardIcon title={elm.title} icon={<FontAwesome5 name="map-marker-alt" size={24} color={env.colors.SecondaryBg} />} desc={elm.desc} />
  );
}

const lieux = [
  {
    title: "Cabinet de l'hypnose - Melun (77)",
    desc: "Des spécialistes sont prêts à vous accompagner",
    ville: "Melun"
  },
  {
    title: "Cabinet de l'hypnose - Namek",
    desc: "Des spécialistes sont prêts à vous accompagner",
    ville: "Namek"
  },
  {
    title:  "Cabinet de l'hypnose - Neptune",
    desc: "Des spécialistes sont prêts à vous accompagner",
    ville: "Neptune"
  },
  {
    title: "Cabinet de l'hypnose - Mars",
    desc: "Des spécialistes sont prêts à vous accompagner",
    ville: "Mars"
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