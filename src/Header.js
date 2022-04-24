import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateVariable } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ cart, user }, dispatch] = useStateVariable();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header_search">
                <input className="header_ser" type="text" />
                <SearchIcon className="ser_icon" />
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="option_one">Hello,</span>
                        <span className="option_two">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to={"/orders"}>
                    <div className="header_option">
                        <span className="option_one">Returns</span>
                        <span className="option_two">& Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="option_one">Your</span>
                    <span className="option_two">Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="basket">
                    <ShoppingBasketIcon className="bask_icon" />
                    <span className="option_two">{cart?.length}</span>
                </div>
            </Link>
        </div>
    );
}

export default Header;
