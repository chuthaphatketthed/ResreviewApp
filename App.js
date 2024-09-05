import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Welcome from './screens/Welcome';
import Review from './Prores/Review';
import Rese from './Prores/Rese';
import ReseFood from './Prores/ReseFood'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './components/HomeStack';
import BottomTab from './components/BottomTab';

export default function App() {
  return (
    // <Welcome />
    // <Review/>
    // <Rese/>
    // <ReseFood/>
    <NavigationContainer>
      <HomeStack/>
      {/* <BottomTab/> */}
    </NavigationContainer>
  );
}

