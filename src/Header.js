import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header_search">
                <input className="header_ser" type="text" />
                <SearchIcon className="ser_icon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="option_one">Hello,</span>
                    <span className="option_two">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="option_one">Returns</span>
                    <span className="option_two">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="option_one">Your</span>
                    <span className="option_two">Prime</span>
                </div>
            </div>

            <div className="basket">
                <ShoppingBasketIcon className="bask_icon" />
                <span className="option_two">0</span>
            </div>
        </div>
    );
}

export default Header;
