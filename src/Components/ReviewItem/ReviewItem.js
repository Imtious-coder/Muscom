import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div style={{borderBottom: "1px solid lightgrey", marginBottom:"5px", paddingBottom:"5px", marginLeft:"200px"}} className="review-item">
           <h4 className="product-name">{name}</h4> 
           <h6>Quantity is: {quantity} </h6>
           <br />
           <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;