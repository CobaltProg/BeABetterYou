import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from '../utils/Card';
import Input from '../utils/Input';
import CheckBox from '../utils/CheckBox';
import RoundedButton from '../utils/RoundedButton';
import { AntDesign } from '@expo/vector-icons';
import env from '../env';

export default function Profile({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card title="Mon compte" content={<MonCompte />} />
      <Card title="Mes mauvaise habitudes" content={<MesMauvaisesHabitudes navigation={navigation} />} />
    </ScrollView>
  );
}

function MonCompte (){
  return (
    <View style={{width: '100%', alignItems:'center', justifyContent: 'center'}}>
      <Text style={styles.secondaryText}>Modifier vos informations personnelles</Text>
      <Input placeholder="HolidayMan77" />
      <Input placeholder="HolidayMan77@gmail.com" type="email" />
      <Input placeholder="bambino" type="password" hidden={true} />
      <RoundedButton text="Enregistrer" icon={<AntDesign name="edit" size={24} color={env.colors.SecondaryText} />} />
    </View>
  )
}

function MesMauvaisesHabitudes ({ navigation }){
  return (
    <View style={{width: '100%', alignItems:'center', justifyContent: 'center'}}>
      <Text style={styles.secondaryText}>Modifier vos addictions</Text>
      <CheckBox title="Le sucre" action={() => navigation.navigate('Addiction')} />
      <CheckBox title="Le tabac" action={() => navigation.navigate('Addiction')} />
      <CheckBox title="Les aliments gras" action={() => navigation.navigate('Addiction')} />
      <CheckBox title="Les réseaux sociaux" action={() => navigation.navigate('Addiction')} />
      <RoundedButton 
        text="Ajouter" 
        icon={<AntDesign name="pluscircleo" size={24} color={env.colors.SecondaryText} />}
        action={() => navigation.navigate('addAddiction')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: env.colors.MainBg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  secondaryText: {
    color: env.colors.SecondaryText
  }
});