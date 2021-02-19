import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardIcon from '../utils/CardIcon';
import Card from '../utils/Card';
import Filter from '../utils/Filter';
import env from '../env';

import { FontAwesome } from '@expo/vector-icons';

export default function Communaute() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="Communauté" content={<Content />} />
      <Liste liste={posts} />
    </ScrollView>
  );
}

function Content () {
  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', color: env.colors.SecondaryText}}>Filtrez du contenu</Text>
      <View style={{flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
        <Filter text="Sucre" />
        <Filter text="Tabac" />
        <Filter text="Cannabis" />
        <Filter text="Alcool" />
        <Filter text="Réseaux sociaux" />
      </View>
    </View>
  )
}

function Liste ({ liste }) {
  return (
    <View>
      { liste.map((elm, i) => {
          return <Post elm={elm} key={i} />
        })}
    </View>
  );
}

function Post({ elm }) {
  return (
    <CardIcon title={elm.title} icon={<FontAwesome name="user" size={24} color="#ddd" />} desc={elm.desc} />
  );
}

const posts = [
  {
    title: "Leila 667",
    desc: "Plus de 20 jours sans fumer des clopes, trop fière."
  },
  {
    title: "Edoh_93",
    desc: "Je n'arrive pas à laisser mon téléphone loin de moi"
  },
  {
    title:  "Netero007",
    desc: "je vais atteindre mon objectif demain, truc de ouf."
  },
  {
    title: "Mystique78",
    desc: "Merci pour tout le soutien que vous m'avez apporté, j'ai enfin arrêté l'alcool !"
  }
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});