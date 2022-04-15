import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="" />

            <div className="header_search">
                <input className="header_ser" type="text" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="option_one">Hello People</span>
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
                <div className="header_option">
                    <span className="option_one">Hello People</span>
                    <span className="option_two">Sign In</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
