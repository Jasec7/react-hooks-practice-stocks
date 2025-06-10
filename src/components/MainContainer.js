import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("a-z")
  const [filteredBy, setFilteredBy] = useState('All')

  function handleBuy(clickedStock){
    console.log("I was clicked", clickedStock)
    setPortfolio([...portfolio, clickedStock])
  };

  function handleSell(id){
    const updatedStocks = portfolio.filter((stock) => stock.id !==id)
    setPortfolio(updatedStocks)
    console.log("i was sold", updatedStocks)
  };

 
  const filteredStocks = stocks.filter((stock) => {
  return filteredBy === "All" || stock.type === filteredBy;
});


  const sortedStocks = [...filteredStocks].sort((a,b) =>{
    if(sortBy ==="a-z"){
      return a.ticker.localeCompare(b.ticker);
    }else if(sortBy === "z-a"){
      return b.ticker.localeCompare(a.ticker)
    }else if(sortBy ==='price'){
      return a.price - b.price
    }else{
      return 0
    }

  })

  useEffect(() => {
    fetch(" http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stocks) => setStocks(stocks))
  },[])
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} filteredBy={filteredBy} setFilteredBy={setFilteredBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} onStockClick={handleBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={handleSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
