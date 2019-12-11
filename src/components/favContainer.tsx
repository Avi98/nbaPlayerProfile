import React from "react";
import Favorite from "./favoraite";
import styled from "styled-components";

const FavContainer = styled.div`
    display:flex;
    align-items:center;
    grid-column:3;
    grid-row: 3;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--textBlack);
    letter-spacing: -1px;
    padding-right: 2rem;
    justify-content:space-between;
    font-family: 'Comfortaa', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
`


const FavoriteContainer: React.FC = () => {
    function onClick() {

    }
    return (<FavContainer>
        <Favorite onClick={onClick} /> Favorite
    </FavContainer>)
}

export default FavoriteContainer