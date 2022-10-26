import { StyleSheet, Text, TouchableOpacity, View , Dimensions,FlatList} from 'react-native'
import React, {useEffect, useState} from "react";
import { getDresses } from "../Services/DressServices";
import {Dress} from "../components/Dress";

//import GridFlatList from 'grid-flatlist-react-native';


export function DressList({navigation}){
    
    function renderDress({item: dress}){
        
        return(
            <Dress 
                {...dress}
                onPress={() => {
                    navigation.navigate('DressDetails', {dressId: dress.id})
                }}
            />
        )
    }

const [dress, setDresses] = useState([]);
    

    useEffect(() => {
        setDresses(getDresses())
    })
    
    

   
    return(
     
    

        <FlatList
            style={styles.dressesList}
            contentContainerStyle={styles.dressesListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={dress}
            renderItem={renderDress} 
            numColumns={2}
            
           
        />
    )
}


const styles = StyleSheet.create({
    dressesList: {
      backgroundColor: 'black',
    },
    dressesListContainer: {
      backgroundColor: 'black',
      paddingVertical: 8,
      marginHorizontal: 5,
      
    },
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
  },
  button:{
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center'
  },
  buttonText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  }

  });

  