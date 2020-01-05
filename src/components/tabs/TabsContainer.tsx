import * as React from 'react';
import styled from 'styled-components';

export interface TabsContainerProps {
    value: number,
    onChange: React.ChangeEventHandler,
    container?: React.ElementType
    // todo
    children: any
}
export type value = {
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
        outline:none;
`
export const Tab: React.SFC<Tab> = ({ checked = false, value, label, id, ...rest}: Tab) => {
    return (
        <>
            <Label active={checked} {...rest}>{label}</Label>
        </>
    )
}
const TabsContainer: React.SFC<TabsContainerProps> = ({
    value,
    onChange,
    container: Container = 'div',
    children: childProp
}) => {
    const children = React.Children.map(childProp, (child) => {
        const childValue = child.props.value
        return React.cloneElement(child, { onClick:onChange, value: childValue })

    }
    )
    return (<Container>{children}</Container>);
}




export default TabsContainer;