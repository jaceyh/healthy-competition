import React, { useEffect } from "react";


//import counters
import WaterCounter from './components/WaterCounter';
import VegCounter from './components/VegCounter';
import ProteinCounter from './components/ProteinCounter';
import FruitCounter from './components/FruitCounter';



const TotalPoints = ( { setDonnyWater, setJaceyWater, setDonnyFruit, setJaceyFruit, setDonnyVeg, setJaceyVeg, setDonnyPro, setJaceyPro } ) => {

    const sumPoints = () => {

    }

    return (
        <div>
            <FruitCounter donnyFruit={setDonnyFruit} jaceyFruit={setJaceyFruit}/>
            <VegCounter donnyVeg={setDonnyVeg} jaceyVeg={setJaceyVeg}/>
            <ProteinCounter donnyPro={setDonnyPro} jaceyPro={setJaceyPro}/>
            <WaterCounter donnyWater={setDonnyWater} jaceyWater={setJaceyWater}/>
        </div>
    )
}

export default TotalPoints;