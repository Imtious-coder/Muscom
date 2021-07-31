import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, price, img, seller, stock, key } = props.data;
    
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name"><Link to={"/product/" + key}>{name}</Link></h3>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock order soon </p>
                {
                    props.showAddToCart && <button onClick={() => props.handleAddProduct(props.data)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;