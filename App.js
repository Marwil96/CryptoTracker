import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene, Stack} from 'react-native-router-flux';
import { Font } from 'expo';
import Store from './src/Store';
import { Header, CryptoContainer, CoinDetail } from './src/components';


export default class App extends Component {
	componentDidMount() {
    Font.loadAsync({
      'Poppins-Bold': require('./src/Assets/Poppins-Bold.ttf'),
      'Poppins-Medium': require('./src/Assets/Poppins-Medium.ttf'),

    });
  }
  render() {
    return (
      <Provider store={Store}>

         <Router>
         	<Scene>
				<Scene key="crypto" component={CryptoContainer} hideNavBar/>
				<Scene key="CoinDetail" component={CoinDetail} hideNavBar/>
			</Scene>
		</Router>
    
      </Provider>
    );
  }
}

