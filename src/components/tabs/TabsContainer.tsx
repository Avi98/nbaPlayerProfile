import * as React from 'react';
import styled from 'styled-components/macro';

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
    onClick?: React.MouseEventHandler,
    indicator ?: React.ReactElement,
    mount?: boolean
} & value


type Label = {
    active: boolean;
}

type Indicator = {
    height: string | number,
    width: string | number,
    top: string | number
}
const Label = styled.button<Label>`
        font-weight: 800;
        font-size: 0.5rem;
        margin-left: 1rem;
        text-transform: uppercase;
        padding: 0.8rem  1.0rem;
        border-radius: 10px;
        font-family:sans-serif;
        /* background: ${p => p.active ? `var(--white)` : 'none'}; */
        background:none;
        border:none;
        outline:none;
        position:relative;
        z-index: 3;

`

const Indicator = styled.div`
    position: absolute;
    top: 0;
    left: 12px;
    background-color: #fff;
    z-index:2;
    ${p => `
    height: 34px;
    width: 80px;
    `}

`

export const Tab: React.SFC<Tab> = ({ checked = true, value, label, id, indicator, mount, ...rest }: Tab) => {
    return (
        <>
            <Label active={true} {...rest}>{label}</Label>
            {mount && indicator}
        </>
    )
}

const IndicatorBg = () => <Indicator />

const TabsContainer: React.SFC<TabsContainerProps> = ({
    value,
    onChange,
    container: Container = 'div',
    children: childProp
}) => {

    const TabsRef = React.useRef<HTMLDivElement>(null)
    const [containerSize, updateContainerSize] = React.useState();
    const [indicatorState, updateIndicatorState] = React.useState(null);

    React.useEffect(() => {
        const tabNode = TabsRef.current;
        const rect = tabNode && tabNode.getBoundingClientRect();
        console.log('getBoundingClientRect();', rect)
        updateContainerSize(rect)
    }, [])

    const indicator = (
        <IndicatorBg />
    )

   
    const children = React.Children.map(childProp, (child) => {
        
        const selected = child.props.value === value
        // if not selected find selected node
        console.log("test   ",child)
    
        return React.cloneElement(child, { onClick: onChange, indicator, mount: selected ? true : false })

    }
    )
    
    return (
        <Container>
            <div ref={TabsRef}>
                {children}
            </div>
            
        </Container>);
}




export default TabsContainer;