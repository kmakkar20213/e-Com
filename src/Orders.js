import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Orders.css";
import { useStateVariable } from "./StateProvider";
import Order from "./Order";
import { db } from "./firebase";

function Orders() {
    const [{ cart, user }, dispatch] = useStateVariable();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection("user")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) => {
                    setOrders(
                        snapshot.doc.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    );
                });
        } else {
            setOrders([]);
        }
    }, [user]);
    return (
        <div>
            <Header />
            <div className="orders">
                <h1>Your Orders</h1>

                <div className="orders_order">
                    {orders?.map((order) => (
                        <Order order={order} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders;
