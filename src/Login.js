import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
            .then((auth) => {
                if (auth) {
                    navigate("/");
                }
            })

            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, pass)
            .then((auth) => {
                if (auth) {
                    navigate("/");
                }
            })

            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                />
            </Link>

            <div className="login_form">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    <button
                        className="signin_button"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign-In
                    </button>

                    <button className="register_button" onClick={register}>
                        Creat a new account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
