import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

export default function StockView(props) {
  console.log(props)
	return (
    <View>
    <Text 
      style={[styles.textStyle,styles.largeText]}>
        {props.stockName}
    </Text>

		<Text 
        style={[styles.smallText, styles.textStyle]}>
        {'P/E: '}{props.Pe}
    </Text>
    <Text 
      style={[styles.smallText, styles.textStyle]}>
        {'P/S: '}{props.Ps}
    </Text>
    <Text 
      style={[styles.smallText, styles.textStyle]}>
        {'P/BV: '}{props.Pbv}
    </Text>
    <Text 
      style={[styles.smallText, styles.textStyle]}>
        {'EV/EBITDA: '}{props.Evebitda}
    </Text>
    <Text 
      style={[styles.smallText, styles.textStyle]}>
        {'Долг/EBITDA: '}{props.Debt}
    </Text>
    
			
			<SearchBar 
				placeholderTextInputLabelText="Search (e.g. AAPL)" 
				onSubmit={props.onSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    textAlign: 'center',
    color: 'white',
  },
    borders:{
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: 'green',
      backgroundColor:'grey',
      borderRadius: 10,
      justifyContent: 'center',
      
      
    },
  largeText: {
    fontSize: 45,
  },
  mediumText: {
    fontSize: 35,
  },
  smallText: {
    fontSize: 25,
  },
  rectangleShapeContainer: {
    marginTop: 10,
    marginHorizontal: 160,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: 'green',
  }
});