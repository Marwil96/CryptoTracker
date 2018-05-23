import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Router, Scene} from 'react-native-router-flux';
import CryptoContainer from '.components/CryptoContainer';
import CoinDetail from '.components/CoinDetail';

class RouterComponent extends Component {
	render() {
		return(
			<Router headerMode="none">
			      <Scene key="crypto" component={CryptoContainer} hideNavBar={true}/>
			      <Scene key="CoinDetail" component={CoinDetail} hideNavBar={true}/>
			  </Router>
			)
	}
}


export default RouterComponent;