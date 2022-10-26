import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView} from "react-native";


const numColumns=2
const WIDTH = Dimensions.get('window').width
export function Dress({name, price, image, onPress}){
   
    return(
        <SafeAreaView>
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>R {price}</Text>
            </View>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
        height:WIDTH / numColumns + 50,
        width: WIDTH / numColumns,
        margin: 1,
        marginBottom: 30,
        paddingBottom: 40,

        marginTop: 50,
        

        
    },
    image: {
        width:WIDTH / numColumns,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        margin: 3
        
        
        
    },
    infoContainer: {
        padding: 16 ,
        
       
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: 'green',
        
    }
})
