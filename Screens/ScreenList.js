import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardIcon from '../utils/CardIcon';
import env from '../env';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ScreenList({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardIcon 
        title="Mon compte" 
        icon={<FontAwesome name="user" size={24} color="#445DA7" />}
        desc={"Consultez ou modifiez votre profil"}
        action={() => navigation.navigate('Profile')} />
      <CardIcon 
        title="Vos Trophées" 
        icon={<FontAwesome5 name="crown" size={24} color="#F0AE44" />} 
        desc={"Votre hall de la gloire"}
        action={() => navigation.navigate('Trophees')} />
      <CardIcon 
        title="Communauté" 
        icon={<Entypo name="message" size={24} color="#24CBD1" />} 
        desc={"Retrouvez des partages d'expérience"}
        action={() => navigation.navigate('Communaute')} />
      <CardIcon 
        title="Cures et traîtements" 
        icon={<MaterialIcons name="local-hospital" size={24} color="#E03D41" />}
        desc={"Contactez une structure médicale spécialisée"}
        action={() => navigation.navigate('Traitements')} />
      <CardIcon 
        title="Actualités et conseils"
        icon={<FontAwesome name="bookmark" size={24} color="#A6BCD0" />} 
        desc={"Retrouvez notre sélection de l'actualité sur vos addictions"}
        action={() => navigation.navigate('Actualites')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
});