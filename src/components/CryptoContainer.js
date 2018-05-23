import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Actions } from 'react-native-router-flux';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import Header from './Header';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class CryptoContainer extends Component {
	componentWillMount() {
		this.props.FetchCoinData();
	}
	renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) => 
        	<TouchableOpacity key={index} onPress={()=> {
        		Actions.CoinDetail(coin)
			    console.log('Next Coin');
			    } 
			  }
			>
            <CoinCard 
                coin_name={coin.name}
                coinName={coin.name}
                symbol={coin.symbol}
                coin={coin}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
                percent_change_1h={coin.percent_change_1h}
                max_supply={coin.max_supply}
                available_supply={coin.available_supply}
                total_supply={coin.total_supply}
                id={coin.id}
            />
            </TouchableOpacity>
        ) 
    }
	render() {

		const { crypto } = this.props;
		const { contentContainer } = styles;

		if (crypto.isFetching) {
			return (
				<View>
					<Spinner 
					visible={crypto.isFetching}
					textContent={"Loading..."}
					textStyle={{color: '#253145'}}
					animation="fade"
					/>
				</View>
			)
		}
		return(
			<ScrollView contentContainerStyle={contentContainer}>
				<Text style={{fontWeight: "bold",color: "#514DD7",fontSize:28, marginBottom:30,marginLeft:23}}>CryptoCurrency</Text>
				{this.renderCoinCards()}
			</ScrollView>
			)
	}
}
const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55,
        backgroundColor:"#EBF0F9"
    }
}

function mapStateToProps(state) {
	return {
		crypto: state.crypto
	}
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)