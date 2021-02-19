import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

import { AntDesign } from '@expo/vector-icons';

import Trophees from './Screens/Trophees';
import Traitements from './Screens/Traitements';
import Communaute from './Screens/Communaute';
import Profile from './Screens/Profile';
import ScreenList from './Screens/ScreenList';
import Addiction from './Screens/Addiction';
import Lieux from './Screens/TraitementsLieu';
import Objectifs from './Screens/Objectifs';

const Stack = createStackNavigator();

const backButton = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderBackButton onPress={() => navigation.navigate('ScreenList')} />
  ),
})

export default function SecondaryNavigation({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ScreenList">
      <Stack.Screen name="ScreenList" component={ScreenList} options={{headerTitle: "Menu", headerLeft: () => (<AntDesign name="menu-unfold" size={24} color="black" style={{marginLeft: 20}} />) }} />
      <Stack.Screen name="Trophees" component={Trophees} options={backButton} />
      <Stack.Screen name="Traitements" component={Traitements} options={backButton} />
      <Stack.Screen name="Communaute" component={Communaute} options={backButton} />
      <Stack.Screen name="Profile" component={Profile} options={backButton} />
      <Stack.Screen name="Addiction" component={Addiction} options={backButton} />
      <Stack.Screen name="Lieux" component={Lieux} options={backButton} />
      <Stack.Screen name="Objectifs" component={Objectifs} options={backButton} />
    </Stack.Navigator>
  );
}
