import React from "react";
import "./CheckoutProduct.css";
import { useStateVariable } from "./StateProvider";

function CheckoutProduct(props) {
    const [{ cart }, dispatch] = useStateVariable();
    // console.log(cart);
    // console.log(props);
    // console.log(props.id);
    const deleteFromCart = () => {
        // console.log(props);
        dispatch({
            type: "DELETE_FROM_CART",
            id: props.id,
        });
        // console.log(cart);
    };
    var rating = "";
    for (var i = 0; i < props.rating; i++) {
        rating += "⭐️";
    }
    return (
        <div className="checkout_product">
            <img className="checkout_product_image" src={props.img} alt="" />
            <div className="checkout_product_info">
                <p className="checkout_product_title">{props.title}</p>
                <p className="checkout_product_price">
                    <small>₹ </small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkout_product_rating">
                    <p>{rating}</p>
                </div>
                {!props.hideButton && (
                    <button onClick={deleteFromCart}>Delete From Cart</button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct;
