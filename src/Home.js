import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import Prods from "./Products";

function creatProd(Prods) {
    var rating = "";
    for (var i = 0; i < Prods.rating; i++) {
        rating += "⭐️";
    }
    return (
        <Product
            id={Prods.id}
            // key={Prods.key}
            title={Prods.title}
            price={Prods.price}
            img={Prods.img}
            rating={rating}
        />
    );
}

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home_container">
                <img
                    className="home_img"
                    src="https://1.bp.blogspot.com/-1WbkPYXjLyY/XvIRMmYnckI/AAAAAAAAO4Y/A0dKSJaDEmYQXtGWK4RTMLPUNgCEmx_ZQCK4BGAsYHg/s1944/Knives%2BOut%2BMovie%2BPoster.png"
                    alt=""
                />
            </div>
            <div className="products">{Prods.map(creatProd)}</div>
        </div>
    );
}

export default Home;
