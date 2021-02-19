import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import env from '../env';
import Card from '../utils/Card';

export default function Actualites() {
  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card title="Actualités et conseils" content={<Content />} />
      </ScrollView>
  );
}

function Content () {
  return (
    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Actu 
        title="Comment atteindre l'objectif d'une 'génération sans tabac' ?" 
        img="https://www.bioalaune.com/img/article/36671-megots-cigarettes-region-bruxelles-envoie-facture-industrie-tabac.png" />
      <Actu 
        title="9 signes qui montrent que vous mangez trop de sucre" 
        img="https://www.kienyke.com/wp-content/uploads/2017/07/Nino-comiendo-dulces.png" />
      <Actu 
        title="5 astuces pour éliminer les toxines de son corps" 
        img="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/8/3/6/836e51bfd4_99341_09-1676.jpg" />
      <Actu 
        title="Activité Physique Et Santé : Quels Sont Les Bienfaits Du Sport ?" 
        img="https://www.mypnoe.com/wp-content/uploads/2019/02/endurance_sport_running_pnoe_01.jpg" />
      <Actu 
        title="«Oui, les conséquences de l’addiction des jeunes aux jeux vidéos sont terribles»" 
        img="https://i-cms.journaldunet.com/image_cms/original/10237581-jouer-aux-jeux-video-rend-plus-intelligent.jpg" />
      <Actu 
        title="Comment éviter que les réseaux sociaux détruisent l'estime de soi ?" 
        img="https://infernal.media/wp-content/uploads/2019/09/social.jpg" />
      <Actu 
        title="Comment atteindre l'objectif d'une 'génération sans tabac' ?" 
        img="https://www.bioalaune.com/img/article/36671-megots-cigarettes-region-bruxelles-envoie-facture-industrie-tabac.png" />
      <Actu 
        title="9 signes qui montrent que vous mangez trop de sucre" 
        img="https://www.kienyke.com/wp-content/uploads/2017/07/Nino-comiendo-dulces.png" />
      <Actu 
        title="5 astuces pour éliminer les toxines de son corps" 
        img="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/8/3/6/836e51bfd4_99341_09-1676.jpg" />
      <Actu 
        title="Activité Physique Et Santé : Quels Sont Les Bienfaits Du Sport ?" 
        img="https://www.mypnoe.com/wp-content/uploads/2019/02/endurance_sport_running_pnoe_01.jpg" />
      <Actu 
        title="«Oui, les conséquences de l’addiction des jeunes aux jeux vidéos sont terribles»" 
        img="https://i-cms.journaldunet.com/image_cms/original/10237581-jouer-aux-jeux-video-rend-plus-intelligent.jpg" />
      <Actu 
        title="Comment éviter que les réseaux sociaux détruisent l'estime de soi ?" 
        img="https://infernal.media/wp-content/uploads/2019/09/social.jpg" />
    </View>
  )
}

function Actu ({ title, img }){
  return (
    <TouchableOpacity style={styles.actuContainer}>
      <Image
        style={styles.tinyImg}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 50, 
    paddingBottom: 25
  },
  actuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },
  title: {
    color: env.colors.SecondaryBg,
    fontWeight: 'bold',
    marginLeft: 20
  },
  tinyImg: {
    height: 60,
    width: 60,
    borderRadius: 15
  }
});