import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from './Screens/Accueil';
import Actualites from './Screens/Actualites';
import AddAddiction from './Screens/AddAddiction';
import SecondaryNavigation from './SecondaryNavigtion';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Accueil} options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="Actualites" component={Actualites} options={{
          tabBarLabel: 'Actualites',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="addAddiction" component={AddAddiction} options={{
          tabBarLabel: 'Ajoutez',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="SecondaryNavigation" component={SecondaryNavigation} options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="menu-unfold" size={24} color="black" />
          ),
        }} />
      </Tab.Navigator>
  );
}
