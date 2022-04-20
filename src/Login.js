import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
        </div>
    );
}

export default Login;
