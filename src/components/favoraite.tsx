import React from "react";
import styled from "styled-components";

type Props = {
    fill?: string,
    stroke?: string,
};

type FavoriteType = {
    bgColor?: string;
}

const FavoriteContainer = styled.div<FavoriteType>`
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};
    height: 1.87rem;
    width: 1.87rem;
`
const defaultProps = {
    fill: 'grey',
    stroke: '#646568'
}

const Favroite: React.SFC<Props> = ({ fill, stroke }) =>
    <FavoriteContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill={fill} stroke={stroke} height="100%" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" /></svg>
    </FavoriteContainer>

Favroite.defaultProps = defaultProps;
export default Favroite;