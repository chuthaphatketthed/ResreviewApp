import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReseFood from '../Prores/ReseFood';
import Home from '../screens/Home';
import Hotel from '../Prores/Rese';
import Review from '../Prores/Review';
import Rese from '../Prores/Rese';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />   
          <Stack.Screen
            name="ReseFood"
            component={ReseFood}
            options={{ title: "จองร้านอาหาร" }}
          />      
          <Stack.Screen
            name="Hotel"
            component={Hotel}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Review"
            component={Review}
            options={{ title: "รีวิวโรงแรม" }}
          /> 
        </Stack.Navigator>
      );
    }
    