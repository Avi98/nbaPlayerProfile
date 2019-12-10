import React from "react";
import styled from "styled-components/macro";

const NameBox = styled.div`
    grid-row: name-start / name-end;
    grid-column: 3 / span 2;
`
const Name:React.FC = () => <NameBox>sdfsd</NameBox>

export default Name;