import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';

function App() {

    const [listOfProducts
        , setListOfTypeProducts] = useState([]);
    const [categoryValue, setCategoryValue] = useState("women's clothing");
    const [listOfCategories, setOfCategories] = useState([]);
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
    console.log(listOfProducts)

    return (
        <div className="App">
            <form>
                <select value={categoryValue} onChange={(event) => {
                    setCategoryValue(event.target.value);
                }}>
                    <option value="allProducts">Products</option>
                    {
                        listOfCategories.map((category) =>
                            <option selected={category === categoryValue} value={category}>{category}</option>)
                    }
                </select>
                <input type="text" placeholder="max price"
                />
            </form>
            <table>
                {listOfProducts.map(({title, category, price}) => {
                    return <tr>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>{price}</td>
                    </tr>
                })
                }
            </table>
        </div>)
}


export default App;
