import React, {useEffect, useState} from "react";
import './App.css';
import './index.css';
import {useParams} from 'react-router-dom';

function Details() {
    const [product
        , setProduct] = useState({});
    let {id} = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(value => value.json())
            .then(value => {
                setProduct(value)
            })
    }, [id]);
    console.log(product);
    return (
        <div>
       <h1>
           {product.title}
       </h1>
            <img src={product.image} alt=""/>

            Lorem ipsum dolor sit amet. {id}
        </div>)
}

export default Details;
