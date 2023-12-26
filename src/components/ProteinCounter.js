import React, { useState } from "react";

const ProteinCounter = () => {
  const [donnyPro, setDonnyPro] = useState(0);
  const [jaceyPro, setJaceyPro] = useState(0);

const incrementDonny = async () => {
    setDonnyPro(donnyPro + 1);
};

const decrementDonny = async () => {
    setDonnyPro(donnyPro - 1);
};

const incrementJacey = async () => {
    setJaceyPro(jaceyPro + 1);
};

const decrementJacey = async () => {
    setJaceyPro(jaceyPro - 1);
};


  return (
    <div>
    <div>
        <p>Donny's meal/snack Protein count is: {donnyPro}</p>
        <button onClick={incrementDonny}>+</button>
        <button onClick={decrementDonny}>-</button>
    </div>
    <div>
        <p>Jacey's meal/snack Protein count is: {jaceyPro}</p>
        <button onClick={incrementJacey}>+</button>
        <button onClick={decrementJacey}>-</button>
    </div>
    </div>
  );
}

export default ProteinCounter;