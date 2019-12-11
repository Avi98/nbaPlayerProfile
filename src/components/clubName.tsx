import React from "react";
import styled from "styled-components/macro";
import { Icon } from "../styles";
import {clippersIcon} from "../images"

type props = typeof defaultProps;


const ClubNameContainer = styled.div`
    grid-row: clubName-start / clubName-end;
    grid-column: 3 / span 2;
    >img{
        vertical-align:middle;
        height: 1.25rem;
        width: 1.25rem;
        margin-right: 1rem;
    }
`

const defaultProps = {
    icon: clippersIcon,
    clubName: 'LA Clippers'
}


const ClubName:React.FC<props> = ({icon, clubName}) =><ClubNameContainer><Icon src={icon} /><span>{clubName}</span> </ClubNameContainer>

ClubName.defaultProps = defaultProps

export default ClubName;