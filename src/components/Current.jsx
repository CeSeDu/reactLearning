import React from 'react'
import '../css/currency.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_cKHrtjlduTjHsQhRvYKFAZWaq5YMKYvtXakKkJK8';

function Current() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const  exChange = async () =>{
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);

    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    // console.log(response.data.data[toCurrency]);
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  }
  return (
    <div className='currency-div'>
      <div>
        <h2>Doviz Kuru Uygulaması</h2>
      </div>
      <div className='currency-content'>
        <input value={amount} onChange={(e) => setAmount(e.target.value)}
         type="text"  className='amount'/>
        <select onChange={(e) => setFromCurrency(e.target.value)}
         className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
        </select>
        <FaArrowCircleRight />
        <select onChange={(e) => setToCurrency(e.target.value)}
         className='to-currency-option'>
            <option>TL</option>
            <option>USD</option>
            <option>EUR</option>
        </select>           
        <input value={result}
          onChange={(e) => setAmount(e.target.value)} 
         type="number" className='result' />
        </div>
        <button onClick={exChange}>Çevir</button>
    </div>
  )
}

export default Current