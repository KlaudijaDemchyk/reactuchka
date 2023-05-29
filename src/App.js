import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import ProductRow from './components/ProductRow';

// import {AddReactionRounded} from "@mui/icons-material";

function App({ currency: globalCurrency }) {
  const [listOfProducts, setListOfTypeProducts] = useState([]);
  const [categoryValue, setCategoryValue] = useState("women's clothing");
  const [listOfCategories, setOfCategories] = useState([]);
  const [currency, setCurrency] = useState(globalCurrency);
  const [exchangeRate, setExchangeRate] = useState(1);

  const REACT_APP_API_KEY ='FCLsj2bAfHqpXeBRzT0aObMkrQm6Za1N';
  
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('apikey', REACT_APP_API_KEY);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    if (currency !== 'USD') {
      fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${currency}&base=USD`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          setExchangeRate(json.rates[currency]);
        })
        .catch((error) => console.log('error', error));
    } else {
      setExchangeRate(1);
    }
  }, [currency]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setOfCategories(json);
      });

    fetch('https://fakestoreapi.com/products')
      .then((value) => value.json())
      .then((value) => {
        setListOfTypeProducts(value);
      });
  }, []);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/' + categoryValue)
      .then((res) => res.json())
      .then((json) => {
        setListOfTypeProducts(json);
      });
  }, [categoryValue]);

  return (
    <div className="App">
      <form>
        <select
          value={categoryValue}
          onChange={(event) => {
            setCategoryValue(event.target.value);
          }}>
          <option value="allProducts">Products</option>
          {listOfCategories.map((category) => (
            <option
              defaultValue={category === categoryValue}
              key={category}
              value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="text" placeholder="max price" />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option defaultValue={currency} value="USD">
            USD
          </option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </form>
      <table>
        <tbody>
          {listOfProducts.map(({ title, category, price, id }) => {
            return (
              <ProductRow
                title={title}
                category={category}
                price={price}
                id={id}
                currency={currency}
                key={id}
                exchangeRate={exchangeRate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
