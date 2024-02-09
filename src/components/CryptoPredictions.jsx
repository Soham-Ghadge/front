// // CryptoPrice.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function CryptoPrice({ currency }) {
//   const [price, setPrice] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('/');
//         const data = response.data;
//         // Extract price for the specified currency
//         const currencyPrice = data[`${currency}_pred_val`];
//         setPrice(currencyPrice);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, [currency]);

//   return (
//     <div>
//       <h2>{currency} Price Prediction</h2>
//       {price !== null ? (
//         <p>{currency}: {price}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default CryptoPrice;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPredictions = () => {
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/crypto_predict');
        setTimeout(() => {
          setPredictions(response.data);
          console.log(response.data)
          setLoading(false);
        }, 5000); 
      
      } catch (error) {
        console.error('Error fetching predictions:', error);
        setLoading(false);
      }
    
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Cryptocurrency Predictions</h2>
      <ul>
        <li>BTC: {predictions && predictions.btc_pred_val}</li>
        <li>BNB: {predictions && predictions.bnb_pred_val}</li>
        <li>Avalanche: {predictions && predictions.avalanche_pred_val}</li>
        <li>Cardano: {predictions && predictions.cardano_pred_val}</li>
        <li>Chainlink: {predictions && predictions.chainlink_pred_val}</li>
        <li>Doge: {predictions && predictions.doge_pred_val}</li>
        <li>ETH: {predictions && predictions.eth_pred_val}</li>
        <li>Solana: {predictions && predictions.sol_pred_val}</li>
        <li>Tether: {predictions && predictions.tether_pred_val}</li>
        <li>XRP: {predictions && predictions.xrp_pred_val}</li>
      </ul>
    </div>
  );
};

export default CryptoPredictions;
