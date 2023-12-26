import React, { useState } from "react";

const FruitCounter = () => {
  const [donny, setDonny] = useState(0);
  const [jacey, setJacey] = useState(0);

const incrementDonny = async () => {
    setDonny(donny + 1);
};

const decrementDonny = async () => {
    setDonny(donny - 1);
};

const incrementJacey = async () => {
    setJacey(jacey + 1);
};

const decrementJacey = async () => {
    setJacey(jacey - 1);
};


  return (
    <div>
    <div>
        <p>Donny's meal/snack Fruit count is: {donny}</p>
        <button onClick={incrementDonny}>+</button>
        <button onClick={decrementDonny}>-</button>
    </div>
    <div>
        <p>Jacey's meal/snack Fruit count is: {jacey}</p>
        <button onClick={incrementJacey}>+</button>
        <button onClick={decrementJacey}>-</button>
    </div>
    </div>
  );
}

export default FruitCounter;