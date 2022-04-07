const fetchStockPrice = async (stockTickerSymbol) => {

  const response = await fetch("http://192.168.3.13:5000/multiplicators?tiker="+stockTickerSymbol);
  const result = await response.json();
  let name = result['name']
  let tiker = result['tiker']
  let pe = result['P/E']
  let ps = result['P/S']
  let pbv = result['P/BV']
  let evebitda = result['EV/EBITDA']
  let debt = result['Долг/EBITDA']
  
  return {
    stockName: name,
    stockTicker: tiker,
    Pe: pe,
    Ps:ps,
    Pbv:pbv,
    Evebitda:evebitda,
    Debt:debt
  }
};

export default fetchStockPrice;