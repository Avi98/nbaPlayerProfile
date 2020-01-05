import * as React from 'react';

export interface TabsContainerProps {
    value: number,
    onChange: React.ChangeEventHandler,
    container?: React.ElementType
    // todo
    children: any
}

const TabsContainer: React.SFC<TabsContainerProps> = ({
    value,
    onChange,
    container: Container = 'div',
    children: childProp
}) => {
    console.log('onChange', onChange)
    const children = React.Children.map(childProp, (child) => {
        const childValue = child.props.value
        return React.cloneElement(child, { onClick:onChange, value: childValue })

    }
    )
    return (<Container>{children}</Container>);
}




export default TabsContainer;