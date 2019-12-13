import React from "react";
import styled from "styled-components";

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

const MiddleContainer:React.SFC = () => <Text>Clippers</Text>

export default MiddleContainer;