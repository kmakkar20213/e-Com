import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateVariable } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ cart }, dispatch] = useStateVariable();

    return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout_left">
                    <img
                        className="checkout_ad"
                        src="http://static1.squarespace.com/static/5a0ce48ff6576eb2139a058c/5a0ce5f08165f566f331aa0a/5a78b53271c10b9caab9a532/1587235840896/Mad+Marketing+Tide+Ad+Super+Bowl+Commercial.PNG?format=1500w"
                        alt=""
                    />
                    <div>
                        <h2 className="checkout_title">Your Shopping Cart</h2>
                        {cart.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                // key={item.key}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
