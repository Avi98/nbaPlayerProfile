import React from 'react'
import styled from "styled-components/macro";
import TabsContainer from './TabsContainer';

export interface TabsProps {
}

type value = {
    value: number,
}
type Tab = {
    checked?: boolean,
    label: string,
    id: string //TODO: should be unique,
    onClick?: React.MouseEventHandler
} & value


type Label = {
    active: boolean;
}

const Container = styled.div<value>`
    >input{
        display:none;
    }
`

const Label = styled.button<Label>`
        font-weight: 800;
        font-size: 0.5rem;
        margin-left: 1rem;
        text-transform: uppercase;
        padding: 0.8rem  1.0rem;
        border-radius: 10px;
        font-family:sans-serif;
        background: ${p => p.active ? `var(--white)` : 'none'};
        border:none;
`

const Tab: React.SFC<Tab> = ({ checked = false, value, label, id, ...rest}: Tab) => {
    return (
        <>
            <Label active={checked} {...rest}>{label}</Label>
        </>
    )
}
const Tabs: React.SFC<TabsProps> = () => {
    return (
        <TabsContainer onChange={(e) => console.log('esdfsdg', e)} value={1} container={Container}>
            <Tab checked={true} value={1} label={'Last game'} id={'tab1'} />
            <Tab value={2} label={'Next Game'} id={'tab2'} />
        </TabsContainer>
    );
}

export default Tabs;