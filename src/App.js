import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateVariable } from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateVariable();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);

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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
