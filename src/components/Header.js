import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
	return (
		<View style={styles.headerContainer}> 
			<Text style={styles.header}> CryptoCurrency </Text>
		</View>
		)
}
const styles = StyleSheet.create({
    headerContainer: {
    	display: "flex",
    	marginTop: 10,
        marginBottom: 15,
        marginLeft: 12,
    	alignItems: "flex-start",
        justifyContent:"center"
    },
    header: {
    	fontWeight:"bold",
    	fontSize:26
    }
});
export default Header;