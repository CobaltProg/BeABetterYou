import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import env from '../env';

export default function Card({ title,content }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.pastille}></View>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.cardContent}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 20,
    margin: 10
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  pastille: {
    padding: 10,
    borderRadius: 100,
    marginRight: 20,
    backgroundColor: env.colors.Main
  },
  cardContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 25
  },
  separator: {
    width: '100%',
    padding: 2,
    backgroundColor: env.colors.BorderColor
  }
});