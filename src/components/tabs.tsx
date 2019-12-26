import React from 'react'
import styled from "styled-components/macro";

export interface TabsProps {

}

type Label = {
    active?: boolean;
}

const Container = styled.div`
    >input{
        display:none;
    }
    >label{
       
    }

`

const Label = styled.label<Label>`
        font-weight: 800;
        font-size: 0.5rem;
        margin-left: 1rem;
        text-transform: uppercase;
        padding: 0.8rem  1.0rem;
        border-radius: 10px;
        font-family:sans-serif;
        background: ${p => p.active ? `var(--white)` : 'none'};
`
const Tabs: React.SFC<TabsProps> = () => {
    return (
        <Container>
            <input type='radio' id='tab1' name="last-game" checked />
            <Label active htmlFor="tab1">last game</Label>
            <input type='radio' id='tab2' name="last-game" />
            <Label htmlFor="tab2">next game</Label>
        </Container>
    );
}

export default Tabs;