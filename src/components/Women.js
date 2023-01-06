import React from "react";
import "../styles/Women.scss";
import Header from "./Header";

import Footer from "./Footer";

const Women = () => {
  return (
    <>
      <Header />
      <div className="women-section">
        <div className="header">
          <h1> Women Collection</h1>
          <p> Available in 2022</p>
        </div>
        <div className="look">
          <p>We have 50% off for all Product</p>
          <button>Take a look</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Women;
