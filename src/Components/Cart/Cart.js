import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const product = props.cart[i];
        total = total + product.price
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }


    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping cost: ${shipping}</p>
            <p>Tax & Vat {tax}</p>
            <p>Total amount: ${Number(grandTotal)}</p>
            <br />
            <Link to="/"></Link>
        </div>
    );
};

export default Cart;