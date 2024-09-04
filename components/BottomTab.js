import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { FontAwesome } from "@expo/vector-icons";
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );

}
