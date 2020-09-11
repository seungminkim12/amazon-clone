import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          title="The lean startup"
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
          price={29.99}
          rating={5}
        />
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
