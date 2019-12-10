import React from "react";
import styled from "styled-components/macro";

const NameBox = styled.div`
    grid-row: name-start / name-end;
    grid-column: 3 / span 2;
    line-height: 6rem;
    >h2{
        font-family: 'Quicksand';
        margin:auto;
        font-size: 7.5rem;
        text-transform:capitalize;
        
    }
`

type Props = typeof defaultProps;

const defaultProps = {
    firstName: 'paul',
    lastName: 'george'
}

const Name: React.FC<Props> = ({ firstName, lastName }) => <NameBox><h2>{firstName}</h2><h2>{lastName}</h2></NameBox>
Name.defaultProps = defaultProps;

export default Name;