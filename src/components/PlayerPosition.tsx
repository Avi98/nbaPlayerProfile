import React from 'react'
import { TextNumber } from './styles';


type Position = {
    position : string;
}
 const PlayerPosition:React.FC<Position> = (props) => <TextNumber>{props.position}</TextNumber>
 export default PlayerPosition
