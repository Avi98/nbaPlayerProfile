import React from "react";
import styled from "styled-components";

type Props = {
    fill?: string,
    stroke?: string,
    onClick: () => void
};

type FavoriteType = {
    bgColor?: string;
    height?: string;
    width?: string;
}

const FavoriteContainer = styled.div<FavoriteType>`
    background: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
    cursor: pointer;
`
const defaultProps = {
    fill: '#cccccc',
    stroke: '#5e666f'
}

//Todo: not able to add onClick functionality
const Favorite: React.SFC<Props> = ({ fill, stroke, onClick}) =>
    <FavoriteContainer onClick={onClick} height="2rem" width="2rem">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" fill={fill} stroke={stroke} height="48" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" /></svg>
    </FavoriteContainer>

Favorite.defaultProps = defaultProps;
export default Favorite;