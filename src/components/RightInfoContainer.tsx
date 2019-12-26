import * as React from 'react';
import styled from "styled-components/macro";
import Tabs from './tabs';


export interface RightInfoContainerProps {

}

const Container = styled.div`
      grid-row:3 / span 4;
      grid-column:15 / -1;
`
const RightInfoContainer: React.SFC<RightInfoContainerProps> = () => {
    return (
        <Container>
            <Tabs />
        </Container>
    );
}

export default RightInfoContainer;