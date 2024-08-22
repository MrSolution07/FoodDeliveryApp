import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Profile from '../Profile/profile';
import Menu from '../Menu/menu';
import Cart from '../Cart/cart';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
      <Tab.Navigator initialRouteName="Menu" 
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{ 
              tabBarIcon:({color}) => (
                <FontAwesome name="user" size={24} color={color} />
              )
             }}

        />
        <Tab.Screen 
            name="Menu"
            component={Menu}
            options={{
              tabBarIcon:({color}) => (
                <MaterialIcons name="restaurant-menu" size={24} color={color} />
              )
             }}
        />
        <Tab.Screen 
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({color}) => (
                <FontAwesome6 name="cart-shopping" size={24} color={color}/>
              )
            }}
        />
      </Tab.Navigator>
  )
} 