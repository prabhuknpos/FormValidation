import React from 'react';
import { stockData } from '../StockData';
import HomeHeader from './HomeHeader';
import Stock from './Stock';
import '../App.css';


function Stocks() {
  return (
    <div className="stock-container">
        <HomeHeader></HomeHeader>

{
    stockData.map((data,key) => {
        return (
            <div key={key}>
                <Stock 
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
                ></Stock>
                </div>
        );
    })
}

    </div>
  )
}

export default Stocks