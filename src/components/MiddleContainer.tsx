import React from "react";
import styled from "styled-components";
import { PlayerNumber, PlayerPosition } from ".";

const Text = styled.h1`
    grid-column: 5 / 16;
    grid-row: 3 / 6;
    text-align: center;
    font-size: 9.3rem;
    text-transform: uppercase;
    background: -webkit-linear-gradient(#fefeff, #dcdde2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom:2px;
    margin-top: 0;
    transform: rotateY(50deg);
`

const MiddleContainer: React.SFC = () => (
    <>
        <Text>Clippers</Text>
        {/* TODO: circle and numbers should be coupled together like <circle><pos/> <nub></circle> */}
        <div className="circle"></div>
        {/* col 14 -15 */}
        {/* row 7 -9 */}
        <PlayerNumber number={'13'} />
        <PlayerPosition position={'F'} />
    </>
)

export default MiddleContainer;