import React from 'react'
import styled from "styled-components";
import { TextNumber } from './styles';

const Container = styled(TextNumber)`
    grid-row: 6 /span 2;
    grid-column:  7 / span 2;
    justify-self: center;
    align-self: center;
    font-size: 10rem;
    margin-top:none;
    /* margin-top:none; */
    >sup{
        vertical-align: 5rem;
  font-size: 3rem;
    }
`

type Props ={
    number: string | number;
}
const PlayerNumber:React.FC<Props> = (props) => <Container><sup>#</sup>{props.number}</Container>
export default PlayerNumber;