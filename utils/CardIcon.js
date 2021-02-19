import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import env from '../env';

export default function CardIcon({ icon, title, desc, action }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={action}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    borderRadius: 20,
    margin: 10
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    padding: 20,
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
  },
  cardContent: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 25
  },
  cardTitle: {
    width: "100%",
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left'
  },
  cardDesc : {
    width: "100%",
    fontSize: 14,
    textAlign: 'left',
    color: env.colors.SecondaryText
  }
});