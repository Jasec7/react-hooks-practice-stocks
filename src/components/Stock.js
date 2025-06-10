import React from "react";

function Stock({id, ticker, name, type, price, onStockClick}) {
  return (
    <div>
      <div onClick={() => onStockClick({id, ticker, name, type, price}) } className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
