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
import ReviewFormScreen from '../Prores/ReviewForm';
import ReviewListScreen from '../Prores/ReviewListScreen';
import food1 from '../Prores/food1';
import food7 from '../Prores/food7';
import food6 from '../Prores/food6';
import food5 from '../Prores/food5';
import food4 from '../Prores/food4';
import food3 from '../Prores/food3';
import food2 from '../Prores/food2';


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
          {/* reviewform */}
          <Stack.Screen
            name="ReviewForm"
            component={ReviewFormScreen}
            options={{ title: "แจ้งปัญหา" }}
          /> 
          <Stack.Screen
            name="ReviewList"
            component={ReviewListScreen}
            options={{ title: "บันทึกรีวิว" }}
          /> 
          {/* ReseFood */}
          <Stack.Screen
            name="food1"
            component={food1}
            options={{ title: "ร้านรื่นรส" }}
          /> 
          <Stack.Screen
            name="food2"
            component={food2}
            options={{ title: "ร้าน Halu" }}
          /> 
          <Stack.Screen
            name="food3"
            component={food3}
            options={{ title: "ร้าน Pizza manoliz" }}
          /> 
          <Stack.Screen
            name="food4"
            component={food4}
            options={{ title: "ร้านก๋วยเตี๋ยวป้าแจ๋ว" }}
          /> 
          <Stack.Screen
            name="food5"
            component={food5}
            options={{ title: "ร้าน Steak Minihub" }}
          /> 
          <Stack.Screen
            name="food6"
            component={food6}
            options={{ title: "ร้าน Sushi Namake" }}
          /> 
          <Stack.Screen
            name="food7"
            component={food7}
            options={{ title: "ร้าน Konum BBQ" }}
          /> 
        </Stack.Navigator>
      );
    }
    