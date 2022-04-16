import React from "react";
import "./Product.css";

function Product(props) {
    return (
        <div className="product_card">
            <img className="product_img" src={props.img} />
            <h3 className="product_title">{props.title}</h3>
            <h4 className="product_price">{props.price}</h4>
            <p className="rating">{props.rating}</p>
            <button className="cart_button">Add To Cart</button>
        </div>
    );
}

export default Product;
