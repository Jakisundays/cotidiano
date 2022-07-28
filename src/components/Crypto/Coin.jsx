import React from 'react'
import { CoinContainer, CoinH1, CoinH2, CoinCode, CoinImg } from './CryptoComponents'
const Coin = ({ name, icon, price, symbol }) => {
  return (
    <CoinContainer>
        <CoinH1> {name} </CoinH1>
        <CoinImg src={icon} />
        <CoinH2> Price: {price} </CoinH2>
        <CoinCode> {symbol} </CoinCode>
    </CoinContainer>
  )
}

export default Coin
