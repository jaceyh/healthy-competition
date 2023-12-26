import React, { useState } from "react";

const WaterCounter = () => {
  const [donnyWater, setDonnyWater] = useState(0);
  const [jaceyWater, setJaceyWater] = useState(0);

const incrementDonny = async () => {
    setDonnyWater(donnyWater + 1);
};

const decrementDonny = async () => {
    setDonnyWater(donnyWater - 1);
};

const incrementJacey = async () => {
    setJaceyWater(jaceyWater + 1);
};

const decrementJacey = async () => {
    setJaceyWater(jaceyWater - 1);
};


  return (
    <div>
    <div>
        <p>Donny's Water count is: {donnyWater}</p>
        <button onClick={incrementDonny}>+</button>
        <button onClick={decrementDonny}>-</button>
    </div>
    <div>
        <p>Jacey's Water count is: {jaceyWater}</p>
        <button onClick={incrementJacey}>+</button>
        <button onClick={decrementJacey}>-</button>
    </div>
    </div>
  );
}

export default WaterCounter;