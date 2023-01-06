import React from "react";
import busImage from "../assets/trainer1.jpg";

import "../styles/Smallsection.scss";
import Card from "./Card";

const Smallsection = () => {
  const cardData = [
    {
      id: 1,
      image: busImage,
      desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellat?",
      title: "Unisex",
    },
    {
      id: 2,
      image: busImage,
      desc: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellat?",
      title: "Woman",
    },
    {
      id: 3,
      image: busImage,
      desc: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellat?",
      title: "Man",
    },
    {
      id: 4,
      image: busImage,
      desc: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellat?",
      title: "Unisex",
    },
  ];

  return (
    <section
      className="second-section
"
    >
      <div className="card-wrapper">
        {cardData.map(({ id, image, desc, title }, index) => {
          return (
            <Card key={id} className="cart">
              <img src={image} alt="" />
              <p>{desc}</p>
              <h1>{title}</h1>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Smallsection;
