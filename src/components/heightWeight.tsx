import React from 'react';
import { MeasurementContainer } from "./styles";

type props = {};
const mes = {
    height:{
        name: 'height',
        value: "6''8",
    },
    weight:{
        name:'weight',
        value: '220lbs'
    }

}

const HeightWeight: React.FC<props> = () => <MeasurementContainer>
    <div className="col">
        <p>height</p>
        <p className="val">
            6
            <sub>ft</sub>
            8
            <sub>in</sub>
            <p className="block">/ 223m</p>
        </p>
    </div>
    <div className="col">
        <p>weight</p>
        <p className="val">
            220
            <sub>lbs</sub>

            <p className="block">/ 95.5Kg</p>
        </p>
    </div>
</MeasurementContainer>

export default HeightWeight;