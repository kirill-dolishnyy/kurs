import React from 'react';
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  ActivityIndicator
} from 'react-native';

import SearchBar from './components/SearchBar';
import StockView from './components/StockView';
import fetchStocks from './utils/fetchStocks';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the properties in our local state
    this.state = {
      loading: false,
      error: false,
      stockName: '',
      stockTicker: '',
      Pe: '',
      Ps: '',
      Pbv:'',
      Evebitda:'',
      Debt:'',

    }
  }  
  
  // Callback function to execute fetchStocks(...) and update our local state accordingly
  handleFetchStocks = async (stockTickerSymbol) => {
    if (stockTickerSymbol) {
      this.setState({
        loading: true
      },
        async () => {
        try {
          const { stockTicker,  stockName, Pe, Ps, Pbv, Evebitda, Debt } = await fetchStocks(stockTickerSymbol); 
          this.setState({
            error: false,
            loading: false,
            stockName: stockName,
            stockTicker: stockTicker,
            Pe: Pe,
            Ps:Ps,
            Pbv:Pbv,
            Evebitda:Evebitda,
            Debt:Debt
          });
        } catch (e) {
          this.setState({
            error: true,
            loading: false
          });
        }
      });
    } else {
      return;
    }
  }
  
  // This is a React Native lifecyle method
  // componentDidMount() executes immediately after the component (in this case App) 
  // is inserted in the view hierarchy
  componentDidMount() {
    this.handleFetchStocks('gazp')
  }  
  
  render() {
    const {
      loading,
      error,
      stockName,
      stockTicker,
      Pe,
      Ps,
      Pbv,
      Evebitda,
      Debt
    } = this.state;
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground 
          color = 'black'
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator
              animating={loading}
              color="#007AFF"
              size="large"
            />            
          
            {!loading && error &&
              <View>
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load the stock price, please try again.
                </Text>
                <SearchBar
                  placeholderTextInputLabelText="Search another"
                  onSubmit={this.handleFetchStocks}
                />
              </View>
            }           
        
            {!loading && !error &&
              <StockView 
                stockName={stockName}
                stockTicker={stockTicker}
                Pe={Pe}
                Ps ={Ps}
                Pbv = {Pbv}
                Evebitda = {Evebitda}
                Debt = {Debt}
                onSubmit={this.handleFetchStocks}
              />
            }
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textStyle: {
    fontFamily: 'Arial',
    textAlign: 'center',
    color: 'white',
  },
  smallText: {
    fontSize: 25,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});