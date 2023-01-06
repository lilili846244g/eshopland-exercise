import React from "react";
import Card from "./Card";
import "../styles/CreamSection.scss";
import gift from "../assets/gift.png";
import bus from "../assets/bus.png";
import box from "../assets/box.png";
import cart from "../assets/cart.png";

const CreamSection = () => {
  const giftData = [
    {
      id: 1,
      image: gift,
      desc1: "Send As A Gift",
      desc2: "Ship your gift with a free personalized message",
    },
    {
      id: 1,
      image: bus,
      desc1: "Send As A Gift",
      desc2: "Ship your gift with a free personalized message",
    },
    {
      id: 1,
      image: box,
      desc1: "Send As A Gift",
      desc2: "Ship your gift with a free personalized message",
    },
    {
      id: 1,
      image: cart,
      desc1: "Send As A Gift",
      desc2: "Ship your gift with a free personalized message",
    },
  ];
  return (
    <section className="main">
      <div className="center-text">
        <h1> Good Gits Made Easy</h1>
      </div>
      <div className="allExp">
        {giftData.map(({ id, image, desc1, desc2 }) => {
          return (
            <Card key={id} className="exps">
              <div className="gift">
                <img src={image} alt="" />
              </div>
              <p>{desc1}</p>
              <p>{desc2}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default CreamSection;
