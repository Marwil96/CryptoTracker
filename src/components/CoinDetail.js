import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import arrow from '../Assets/IMG/left-arrow.png';
import { images } from '../Utils/CoinIcons';
import { Actions } from 'react-native-router-flux';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignSelf:'center',
        marginTop:15,
        borderBottomColor: "#e5e5e5",
        backgroundColor: "white",
        width: width*0.9,
        alignSelf:'center',
        borderBottomWidth: 3,
        padding: 20,
        height:621,
        borderRadius:20,
        shadowOpacity: 0.75,
        shadowRadius: 20,
        shadowColor: 'black',
        elevation: 3,
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
        fontSize:18         
    },
    coinName: {
        marginTop: 8,
        marginLeft: 5,
        marginRight: 20,
        fontWeight: "normal", 
        color: "#514DD7",
        fontSize:18 
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
        fontSize:42      
    },
    image: {
        width: 124,
        height: 124,
        marginTop:30,
        alignSelf:'center'
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
        marginTop:30,
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        marginLeft: 5,
        textAlign:'center',
        fontSize:20
    },
    percentChangeMinus: {
        color: "#E74C3C",
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        marginLeft: 5,
        textAlign:'center',
        fontSize:20
    },
    valueFluctationContainer: {
        display:'flex',
        flexDirection:'row',
        width: width*0.9,
        justifyContent:'space-around',
        marginTop:20
    },
    SupplyColor: {
         color: "#5047DA",
        fontWeight: "bold",
        fontFamily: 'Poppins-Bold',
        marginLeft: 5,
        textAlign:'center',
        fontSize:20
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
    valueFluctationContainer,
    SupplyColor
} = styles;

const CoinDetail = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d, percent_change_1h, max_supply,id,available_supply,total_supply }) => {
    console.log("CoinDetail", coin_name)
    return (
        <View>
        <TouchableOpacity onPress={()=> {
                Actions.pop()
                console.log('Arrow Is Pressed');
                } 
              }
              style={{marginLeft:30, marginTop:35,display:'flex',flexDirection:'row', alignItems:'center'}}
            >
            <Image
          source={arrow}
        />
        <Text style={{color: "#5047DA",fontWeight: "bold",fontFamily: 'Poppins-Medium',fontSize:16}}> Go Back </Text>
        </TouchableOpacity>
        <View style={container}>
            <View style={upperRow}>
                <View style={coinNameGroup}>
                    <Text style={coinSymbol}>{symbol}</Text>
                    <Text style={seperator}>|</Text>
                    <Text style={coinName}>{id}</Text>
                </View>
            </View>
             <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
            <View style={statisticsContainer}>
                <Text style={coinPrice}>
                    <Text style={moneySymbol}>$</Text>{price_usd}
                </Text>
                <Text style={{fontWeight: "normal", color: "#514DD7", fontSize:24, marginBottom:20}}> Per 1 {id} </Text>
                <View style={valueFluctationContainer}>
                    <View style={{display:"flex",flexDirection:"column"}}>
                         <Text style={{color: "#514DD7", fontSize:16,textAlign:'center',fontFamily: 'Poppins-Medium'}}>Last Hour</Text>
                         <Text style={percent_change_1h < 0 ? percentChangeMinus : percentChangePlus }>{percent_change_1h}%</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"column"}}> 
                        <Text style={{color: "#514DD7", fontSize:16,textAlign:'center',fontFamily: 'Poppins-Medium'}}>Available Supply</Text>
                        <Text style={SupplyColor}>{available_supply}</Text>
                    </View>
                </View>

                <View style={valueFluctationContainer}>
                    <View style={{display:"flex",flexDirection:"column"}}>
                         <Text style={{color: "#514DD7", fontSize:16,textAlign:'center',fontFamily: 'Poppins-Medium'}}>Last 48H</Text>
                         <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }>{percent_change_24h}%</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"column"}}>
                        <Text style={{color: "#514DD7", fontSize:16, textAlign:'center',fontFamily: 'Poppins-Medium'}}>Total Supply</Text>
                        <Text style={SupplyColor}>{total_supply}</Text>
                    </View>
                </View>

                <View style={valueFluctationContainer}>
                    <View style={{display:"flex",flexDirection:"column"}}>  
                        <Text style={{color: "#514DD7", fontSize:16,textAlign:'center',fontFamily: 'Poppins-Medium'}}>Last 7 Days</Text>
                        <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }>{percent_change_7d}%</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"column"}}>                   
                        <Text style={{color: "#514DD7", fontSize:16,textAlign:'center',fontFamily: 'Poppins-Medium'}}>Max Supply</Text>
                        <Text style={SupplyColor}>{max_supply}</Text>                      
                    </View>
                </View>

            </View>

        </View> 
        </View>
    )
}

export default CoinDetail;