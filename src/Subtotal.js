import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateVariable } from "./StateProvider";
import { getCartTotal } from "./reducer";

function Subtotal() {
    const [{ cart }, dispatch] = useStateVariable();
    return (
        <div className="subtotal">
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
                            <input type="checkbox" /> This order contains a Gift
                        </small>
                    </>
                )}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
