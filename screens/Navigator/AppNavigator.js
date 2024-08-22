import { View, Text, Alert } from 'react-native';
import React  from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {useState,createContext} from 'react';
import UserInformation  from '../Context/context';


//screens are just heere 
import  UserDetails from '../Forms/step1';
import AddressDetails from '../Forms/step2';
import PaymentDetails from '../Forms/step3';
// import Profile from '../Profile/profile';
// import Menu from '../Menu/menu';
// import Cart from '../Cart/cart';
import Tabs from '../Tabs/tabs';

const Stack = createStackNavigator();
// export const UserInformation = createContext();


export default function AppNavigator() 
{
  //step 1
  const [usrName,setUsrName] = useState(''); 
  const [usrEmail,setUsrEmail] = useState('');
  const [usrPhone,setUsrPhone] = useState('');
  //step 2
  const [usrAddress,setUsrAddress] = useState('');
  const [usrCity,setUsrCity] = useState('');
  const [usrState,setUsrState] = useState('');
  const [usrZip,setUsrZip] = useState('');
   //step 3
  const [usrCardNumber,setUsrCardNumber] = useState('');
  const [usrCardName,setUsrCardName] = useState('');
  const [usrCardExp,setUsrCardExp] = useState('');
  const [usrCardCvv,setUsrCardCvv] = useState('');
  // theme 
  const [textColor, setTextColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const defaultTextColor = 'black';
  const defaultBackgroundColor = 'white';
  const resetTheme = () => {
    setTextColor(defaultTextColor);
    setBackgroundColor(defaultBackgroundColor);
  };
  //for thecart 
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    alert('Item added to cart');
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCart = (item, quantity) => {
    setCartItems((prevItems) => {
      if (quantity === 0) {
        return prevItems.filter(cartItem => cartItem.id !== item.id);
      }
      return prevItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      );
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    Alert.prompt(
      "Clear Cart",
      "Are you sure you want to clear the cart?",
      [
        { text: "Noo!", style: "cancel" },
        { text: "Yeboo!", onPress: () => setCartItems([]) }
      ],
      "default"
    );
  };

  const allUsrInformation = {
    usrName, setUsrName,
    usrEmail, setUsrEmail,
    usrPhone, setUsrPhone,
    usrAddress, setUsrAddress,
    usrCity, setUsrCity,
    usrState, setUsrState,
    usrZip, setUsrZip,
    usrCardNumber, setUsrCardNumber,
    usrCardName, setUsrCardName,
    usrCardExp, setUsrCardExp,
    usrCardCvv, setUsrCardCvv,
    textColor, setTextColor,
    backgroundColor, setBackgroundColor, resetTheme,
    cartItems, addToCart, clearCart, updateCart, removeItem
  };
  return(
  <UserInformation.Provider value={allUsrInformation} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User Details">
        <Stack.Screen
          name="User Details"
          component={UserDetails}
        />
        <Stack.Screen
          name="Address Details"
          component={AddressDetails}
        />
        <Stack.Screen
          name="Payment Details"
          component={PaymentDetails}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  </UserInformation.Provider>
  )
}
