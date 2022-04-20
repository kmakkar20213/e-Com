import React from "react";
import "./Product.css";
import { useStateVariable } from "./StateProvider";

function Product(props) {
    const [{ cart }, dispatch] = useStateVariable();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                key: props.id,
                title: props.title,
                img: props.img,
                price: props.price,
                rating: props.rating,
            },
        });
    };

    return (
        <div className="product_card">
            <img className="product_img" src={props.img} alt="" />
            <h3 className="product_title">{props.title}</h3>
            <h4 className="product_price">₹ {props.price}</h4>
            <p className="rating">{props.rating}</p>
            <button className="cart_button" onClick={addToCart}>
                Add To Cart
            </button>
        </div>
    );
}

export default Product;
