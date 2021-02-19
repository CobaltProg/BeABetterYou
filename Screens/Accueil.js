import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import env from '../env';
import Card from '../utils/Card';
import CardIcon from '../utils/CardIcon';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Accueil({ navigation }) {
  return (
    <View style={styles.container}>
      <Card title="Salut HolidayMan77" content={<Content />} />
      <CardIcon 
        title="Communauté" 
        icon={<Entypo name="message" size={24} color="#24CBD1" />} 
        desc={"Retrouvez des partages d'expérience"}
        action={() => navigation.navigate('SecondaryNavigation', { screen: 'Communaute' })} />
      <CardIcon 
        title="Vos Trophées" 
        icon={<FontAwesome5 name="crown" size={24} color="#F0AE44" />} 
        desc={"Votre hall de la gloire"}
        action={() => navigation.navigate('SecondaryNavigation', { screen: 'Trophees' })} />
      <CardIcon 
        title="Actualités et conseils"
        icon={<FontAwesome name="bookmark" size={24} color="#A6BCD0" />} 
        desc={"Retrouvez notre sélection de l'actualité sur vos addictions"}
        action={() => navigation.navigate('SecondaryNavigation', { screen: 'Actualites' })} />
      <CardIcon
        title="Cures et traîtements" 
        icon={<MaterialIcons name="local-hospital" size={24} color="#E03D41" />}
        desc={"Contactez une structure médicale spécialisée"}
        action={() => navigation.navigate('SecondaryNavigation', { screen: 'Traitements' })} />
    </View>
  );
}

function Content() {
  return (
    <Text>Mes statistiques</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
  }
});