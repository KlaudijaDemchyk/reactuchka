import React, {useEffect, useState} from "react";
import { Link, useMatch } from "react-router-dom";
import './App.css';
import './index.css';
import ProductRow from './ProductRow'


// import {AddReactionRounded} from "@mui/icons-material";

function App({ currency: globalCurrency }) {
    const [listOfProducts
        , setListOfTypeProducts] = useState([]);
    const [categoryValue, setCategoryValue] = useState("women's clothing");
    const [listOfCategories, setOfCategories] = useState([]);
    const [currency, setCurrency] = useState(globalCurrency);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setOfCategories(json)
            })

        fetch("https://fakestoreapi.com/products")
            .then(value => value.json())
            .then(value => {
                setListOfTypeProducts(value)
            })
    }, []);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/' + categoryValue)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setListOfTypeProducts(json)

            })
    }, [categoryValue])
    console.log(currency)

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
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}>
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
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default App;
