import React from 'react'
import styled from "styled-components/macro";
import TabsContainer, { value, Tab} from './TabsContainer';

export interface TabsProps {
}

const Container = styled.div<value>`
    >input{
        display:none;
    }
`

const Tabs: React.SFC<TabsProps> = () => {
    return (
        <TabsContainer onChange={(e) => console.log('esdfsdg', e)} value={1} container={Container}>
            <Tab checked={true} value={1} label={'Last game'} id={'tab1'} />
            <Tab value={2} label={'Next Game'} id={'tab2'} />
        </TabsContainer>
    );
}

export default Tabs;