// CryptoDetailsPage.jsx
import React from 'react';
import CryptoInfo from './CryptoInfo';
import Bitcoin from '../src/components/CoinInfo/Bitcoin'
import { useParams } from 'react-router-dom';
import BitcoinTweet from './components/tweets/bitcoinTweet';
import '/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css';
import '/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/CryptoDetailsPage.css'
import TetherTweet from './components/tweets/TetherTweet';
import AvalancheTweet from './components/tweets/AvalancheTweet';
import CardanoTweet from './components/tweets/CardanoTweet';
import BinanceCoinTweet from './components/tweets/BinanceCoinTweet';
import USDCTweet from './components/tweets/USDCTweet';
import SolanaTweet from './components/tweets/SolanaTweet';
import EthereumTweet from './components/tweets/EthereumTweet';
import DogeCoinTweet from './components/tweets/DogeCoinTweet';
import XRPTweet from './components/tweets/XRPTweet';

const CryptoDetailsPage = () => {
  // Extract the cryptocurrency ID from the URL params
  const { id } = useParams();
  const cryptoID = id;

  return (
    <div className='CryptoDetailsPage-container'>
     {cryptoID === '90' ? <Bitcoin/> : null}

      <CryptoInfo ID={cryptoID} parameters={[
      'name',
      'symbol',
      'price_usd', 
      'market_cap_usd', 
      'percent_change_1h',
      'percent_change_24h',
      'percent_change_7d',
      'volume24',
      'volume24a',
      'csupply',
      'tsupply',
      'msupply',]} />


     {/* Include TradingViewWidget component */}
    {/* Conditional rendering of bitcoinTweet based on cryptoID */}
   {/* {/* {cryptoID === '90' ? <BitcoinTweet /> : null} */}
    {/* {cryptoID === '518' ? <TetherTweet /> : null}
    {cryptoID === '44883' ? <AvalancheTweet/> : null}
    {cryptoID === '257' ? < CardanoTweet/> : null}
    {cryptoID === '2710' ? <BinanceCoinTweet/> : null}
    {cryptoID === '2' ? <DogeCoinTweet/> : null}
    {cryptoID === '80' ? <EthereumTweet/> : null}
    {cryptoID === '48543' ? <SolanaTweet/> : null}
    {cryptoID === '33285' ? <USDCTweet/> : null}
    {cryptoID === '458' ? <XRPTweet/> : null}
 */} 

    </div>
  );
}; 

export default CryptoDetailsPage;
