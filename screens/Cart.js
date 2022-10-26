import React, {useEffect, useState, useContext, useRef} from "react";
import {View, Image, Text, StyleSheet, FlatList, Button} from "react-native";
import {CartContext} from "../CartContext";
import { Paystack, paystackProps } from "react-native-paystack-webview";


import { TouchableOpacity } from "react-native";






export function Cart({navigation}){
   
	const paystackWebViewRef = useRef(paystackProps.PayStackRef)

	
	const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
			<React.Fragment>
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}>R {total}</Text>
            </View>
						<Paystack style={styles.pay}
						paystackKey="pk_live_22655aa5b8e470cdd9883ee3ba4a712b93ad7095"
						paystackSecretKey="sk_live_921bfbbc5a95e65af47d827c69e884f9b1c5b1b2"
						currency="ZAR"
						amount= {total}
						
						billingEmail="rammzz39@gmail.com"
						activityIndicatorColor="green"
						onCancel={(e) => {
				
						}}
						onSuccess={(res) => { 
				
						}}
						ref={paystackWebViewRef}
				/>
						<TouchableOpacity style={styles.pay} onPress={()=> paystackWebViewRef.current.startTransaction()}>
						<Text style={styles.pay}>Pay Now</Text>
					</TouchableOpacity>
					</React.Fragment>
			
        )
    }

    function renderItem({item}){
        return(
            <>
			
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.dress.image} />
                    <Text style={styles.lineLeft}>{item.dress.name} x {item.qty} <Text style={styles.dressTotal}>R{item.totalPrice}</Text></Text>
		
                </View>
	
				
		<View>
		
	</View>
            </>
        )
    }

    return(
		
		
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.dress.id.toString()}
            ListFooterComponent={Totals}

		
		/>
	  
        

    );
	


}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	pay:{
     alignContent: 'center',
	 alignItems: 'center',
	 color: 'green',
	 fontWeight: 'bold',
	 fontSize: 25
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	dressTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 40,
		color: '#333333'
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'right'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
	}
})

