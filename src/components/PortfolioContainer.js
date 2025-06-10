import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
       <Stock 
       key={stock.id} 
       id={stock.id} 
       ticker={stock.ticker} 
       name={stock.name} 
       type={stock.type} 
       price={stock.price} 
       onStockClick={() => onSell(stock.id)} />
))
      }
    </div>
  );
}

export default PortfolioContainer;
