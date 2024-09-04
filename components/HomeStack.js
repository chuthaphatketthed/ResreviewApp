import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReseFood from '../Prores/ReseFood';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="ReseFood">
          <Stack.Screen
            name="ReseFood"
            component={ReseFood}
            options={{ title: "ReseFood" }}
          />      
        </Stack.Navigator>
      );
    }
    