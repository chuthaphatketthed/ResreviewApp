import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReseFood from '../Prores/ReseFood';
import Home from '../screens/Home';
import Hotel from '../Prores/Rese';
import Review from '../Prores/Review';
import Rese from '../Prores/Rese';
import ListHotle from '../Prores/ListHotle';
import Rese2 from '../Prores/Rese2';
import Rese3 from '../Prores/Rese3';
import Rese4 from '../Prores/Rese4';
import Rese5 from '../Prores/Rese5';
import Rese6 from '../Prores/Rese6';
import Rese7 from '../Prores/Rese7';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />   
          {/* ReseFood */}
          <Stack.Screen
            name="ReseFood"
            component={ReseFood}
            options={{ title: "จองร้านอาหาร" }}
          />    
            {/*ReseHotel1-7  */}
          <Stack.Screen
            name="Hotel"
            component={Hotel}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel2"
            component={Rese2}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel3"
            component={Rese3}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel4"
            component={Rese4}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel5"
            component={Rese5}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel6"
            component={Rese6}
            options={{ title: "จองโรงแรม" }}
          /> 
          <Stack.Screen
            name="Hotel7"
            component={Rese7}
            options={{ title: "จองโรงแรม" }}
          /> 
          {/* Review */}
          <Stack.Screen
            name="Review"
            component={Review}
            options={{ title: "รีวิวโรงแรม" }}
          /> 
          {/* ListHotel */}
          <Stack.Screen
            name="ListHotle"
            component={ListHotle}
            options={{ title: "โรงแรม" }}
          /> 
        </Stack.Navigator>
      );
    }
    