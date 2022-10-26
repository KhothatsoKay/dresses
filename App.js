import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import { StyleSheet } from 'react-native';
import { DressList } from "./screens/DressList.js";
import { DressDetails } from "./screens/DressDetails.js";
import { Cart } from "./screens/Cart.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
    <Stack.Navigator>     
      <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
      <Stack.Screen name="DressList" component={DressList} options={({navigation}) => ({title: 'Ndumies Dresses', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="DressDetails" component={DressDetails} options={({navigation}) => ({title: 'Dress Details, add to cart!', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Cart, checkout to purchase!', headerRight: () => <CartIcon navigation={navigation} />})} />


    </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}


const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title:{
    
  }
})


