import React, { useState } from "react";

const FruitCounter = () => {
  const [donnyFruit, setDonnyFruit] = useState(0);
  const [jaceyFruit, setJaceyFruit] = useState(0);

const incrementDonny = async () => {
    setDonnyFruit(donnyFruit + 1);
};

const decrementDonny = async () => {
    setDonnyFruit(donnyFruit - 1);
};

const incrementJacey = async () => {
    setJaceyFruit(jaceyFruit + 1);
};

const decrementJacey = async () => {
    setJaceyFruit(jaceyFruit - 1);
};


  return (
    <div>
    <div>
        <p>Donny's meal/snack Fruit count is: {donnyFruit}</p>
        <button onClick={incrementDonny}>+</button>
        <button onClick={decrementDonny}>-</button>
    </div>
    <div>
        <p>Jacey's meal/snack Fruit count is: {jaceyFruit}</p>
        <button onClick={incrementJacey}>+</button>
        <button onClick={decrementJacey}>-</button>
    </div>
    </div>
  );
}

export default FruitCounter;