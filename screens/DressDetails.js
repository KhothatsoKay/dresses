
import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button, TouchableOpacity} from "react-native";
import { getDress } from '../Services/DressServices';
import {CartContext} from "../CartContext";
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

export function DressDetails({route}) {

  const {dressId} = route.params;
  const [dress, setDress] = useState({});

  useEffect(() => {
      setDress(getDress(dressId))
  })

  const {addItemToCart} = useContext(CartContext)

  function onAddToCart(){
    addItemToCart(dress.id)
  }
const navigation = useNavigation()
  function handleSignOut(){
    auth 
    .signOut()
    .then(() => {
    
    navigation.replace("Login")
})
.catch(error => alert(error.message))
  }

return (
  <SafeAreaView>
      <ScrollView>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={dress.image} />
          </View>
          <View style={styles.infoContainer}>
              <Text style={styles.name}>{dress.name}</Text>
              <Text style={styles.price}>R {dress.price}</Text>
              <Text style={styles.description}>{dress.description}</Text>
              <Button onPress={onAddToCart} title="Add To Cart" />
          </View>
          <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    height: '60%'
  },
  infoContainer: {
    padding: 16
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});