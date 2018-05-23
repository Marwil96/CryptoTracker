import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
    Dimensions
} from 'react-native';

import { images } from '../Utils/CoinIcons';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        backgroundColor: "white",
        width: width*0.9,
        alignSelf:'center',
        borderBottomWidth: 3,
        padding: 20,
        height:204,
        borderRadius:14,
        shadowOpacity: 0.75,
        shadowRadius: 20,
        shadowColor: 'black',
        elevation: 2,
        shadowOffset: { height: 0, width: 0 }
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,
        justifyContent:'space-between'
    },
    coinSymbol: {
        marginTop: 8,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        color: "#514DD7",
        fontSize:16         
    },
    coinName: {
        marginTop: 8,
        marginLeft: 5,
        marginRight: 20,
        fontWeight: "normal", 
        fontFamily: 'Poppins-Medium',
        color: "#514DD7",
        fontSize:16 
    },
    coinNameGroup: {
        display:'flex',
        flexDirection: 'row',
    },
    seperator: {
        marginTop: 8,
        color:"#514DD7"
    },
    coinPrice: {
        fontWeight: "bold", 
        fontFamily: 'Poppins-Bold',
        color: "#514DD7",
        fontSize:34       
    },
    image: {
        width: 35,
        height: 35,
        alignSelf:'flex-end',
        right:10
    },
    moneySymbol: {
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
    },
    statisticsContainer: {
        display: "flex",
        // borderTopColor: "#FAFAFA",
        // borderTopWidth: 2,
        // padding: 10,
        flexDirection: "column",
        alignItems:'center',
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        marginLeft: 5,
        fontSize:18
    },
    percentChangeMinus: {
        color: "#E74C3C",
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        marginLeft: 5,
        fontSize:18
    },
    valueFluctationContainer: {
        display:'flex',
        flexDirection:'row',
        width: width*0.9,
        justifyContent:'space-around',
        marginTop:20
    }

})

const { 
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus,
    coinNameGroup,
    valueFluctationContainer
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    console.log("coincard", coin_name)
	return (
		<View style={container}>

            <View style={upperRow}>
                <View style={coinNameGroup}>
                    <Text style={coinSymbol}>{symbol}</Text>
                    <Text style={seperator}>|</Text>
                    <Text style={coinName}>{coin_name}</Text>
                </View>

                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
            </View>

            <View style={statisticsContainer}>
                <Text style={coinPrice}>
                    <Text style={moneySymbol}>$</Text>{price_usd}
                </Text>
                <Text style={{fontWeight: "normal", color: "#514DD7", fontSize:16,fontFamily: 'Poppins-Medium'}}> Per 1 {coin_name} </Text>
                <View style={valueFluctationContainer}>
                    <Text style={{color: "#514DD7", fontSize:16, fontFamily: 'Poppins-Medium'}}>24h:
                         <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                    </Text>
                    <Text style={{color: "#514DD7", fontSize:16,fontFamily: 'Poppins-Medium'}}>7d:
                        <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                    </Text>
                </View>

            </View>

        </View> 
	)
}

export default CoinCard;