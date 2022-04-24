import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateVariable } from "./StateProvider";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { db } from "./firebase";

const promise = loadStripe(
    "pk_test_51KrUQeSCwLb7eGXTOxqLz0U5sEEq8i9jOJIBfTIO6EUrEiEHyEhIsmOqIeusvjWoM4sQIt3A8U0rFhZDSQGFmRDL00Ii6u2xKG"
);

function Payment() {
    const [{ user, cart }, dispatch] = useStateVariable();
    const stipe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disables, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const navigate = useNavigate();
    const stripe = useStripe();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payment/create?total=${getCartTotal(cart) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                db.collection("users")
                    .doc(user?.uid)
                    .collection("order")
                    .doc(paymentIntent)
                    .set({
                        cart: cart,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                navigate("/orders");
            });
        dispatch({
            type: "EMPTY_CART",
        });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };
    return (
        <div>
            <Header />
            <div className="payments">
                <div className="payments_container">
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user?.email}</p>
                            <p>123 Lala lane</p>
                            <p>Neechay, Upar</p>
                        </div>
                    </div>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Review Items</h3>
                        </div>
                        <div className="payment_items">
                            {cart.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    img={item.img}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="payment_section"></div>
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        <form>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal ({cart?.length} items):
                                                <strong>{value}</strong>
                                            </p>
                                            <small className="subtotal_gift">
                                                <input type="checkbox" /> This
                                                order contains a Gift
                                            </small>
                                        </>
                                    )}
                                />

                                <button disabled={processing || succeeded}>
                                    <span>
                                        {processing ? "Processing" : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
