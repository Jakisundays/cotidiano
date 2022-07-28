import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Coin from './Coin';
import { CryptoContainer, CryptoH1, CryptoHead, CryptoInput, CryptoDisplay } from './CryptoComponents';

const Crypto = () => {
    const [listOfCryptos, setListOfCryptos] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
          (response) => {
            setListOfCryptos(response.data.coins);
          }
        );
      }, []);

      const cryptoSearch = listOfCryptos.filter((crypto) => {
        return crypto.name.toLowerCase().includes(searchWord.toLowerCase());
      });

  return (
    <CryptoContainer>
        <CryptoHead>
            <CryptoH1> Crypto Search </CryptoH1>
            <CryptoInput type="text" placeholder='Enter Crypto:' onChange={(e) => {
            setSearchWord(e.target.value);
          }}/>
        </CryptoHead>
        <CryptoDisplay>
            {cryptoSearch.map((crypto) => {
                return(
                    <Coin name={crypto.name} 
                    icon={crypto.icon}
                    price={crypto.price}
                    symbol={crypto.symbol}/>
                )
            })}
        </CryptoDisplay>
    </CryptoContainer>
  )
}

export default Crypto
