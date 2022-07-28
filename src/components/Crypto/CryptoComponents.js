import styled from "styled-components";

//Coin JSX

export const CoinContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 300px;
    background-color: var(--dark);
    color: white;
    box-shadow: var(--primary) 0px 1px 10px;
    border-radius: 10px;
    margin: 25px;
    text-align: center;
`
export const CoinH1 = styled.h1`
    font-size: 30px;
`
export const CoinH2 = styled.h2`
    font-size: 20px;
`
export const CoinCode = styled.h2`
    font-size: 18px;
    color: var(--primary);
`
export const CoinImg = styled.img`
    height: 100px;
`

// Index JSX

export const CryptoContainer = styled.section`
    width: 520px;
    height: 520px;
    background: var(--dark);
    text-align: center;
    margin: 128px auto;
    border-radius: 10px;
    padding-bottom: 32px;
    z-index: 1;
    box-shadow: 1px 2px 64px rgba(0, 0, 0, 0.9);
    overflow: scroll;
`
export const CryptoHead = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 3px outset var(--primary);
    border-radius: 10px;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: sticky;
    top: 0;
`

export const CryptoH1 = styled.h1`
    font-size: 30px;
    color: var(--primary);
`
export const CryptoInput = styled.input`
    width: 50%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid var(--primary);
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: left;
    margin-top: 20px;

    &::placeholder{
        color: white;
    }


`
export const CryptoDisplay = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`



