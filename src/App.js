import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateVariable } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
    "pk_test_51KrUQeSCwLb7eGXTOxqLz0U5sEEq8i9jOJIBfTIO6EUrEiEHyEhIsmOqIeusvjWoM4sQIt3A8U0rFhZDSQGFmRDL00Ii6u2xKG"
);

function App() {
    const [{}, dispatch] = useStateVariable();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/payment"
                        element={
                            <Elements stripe={promise}>
                                <Payment />
                            </Elements>
                        }
                    />
                    <Route exact path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
