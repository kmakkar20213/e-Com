import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </p>
            <p className="order_id">{order.id}</p>
            {order.data.cart?.map((item, index) => {
                <CheckoutProduct
                    id={item.id}
                    key={index}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    rating={item.rating}
                    hideButton={true}
                />;
            })}
            <CurrencyFormat
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                renderText={(value) => (
                    <>
                        <h3 className="order_total">Order Total : {value}</h3>
                    </>
                )}
            />
        </div>
    );
}

export default Order;
