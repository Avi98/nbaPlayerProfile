import React from 'react'
import styled from 'styled-components/macro';

type key = {
    dob: string,
    age: string,
    birthPlace: string
};

/**new learning */
type body = {
    id: string,
    title: string,
    value: string,
    dob?: string,
    age?: string,
    birthPlace?: string
}

type Response<T> = {
    [P in keyof T]: body
}
export interface IPlayerInfoProps {

}
const Container = styled.div`
    grid-column: 2 / span 3;
    grid-row: 2;
`

const Table = styled.table`
    height: 100%;
    width: 100%;

`

const response: Response<key> = {
    dob: {
        id: 'born',
        title: 'born',
        value: '05/02/1990'
    },
    age: {
        id: 'age',
        title: 'age',
        value: '26'
    },
    birthPlace: {
        id: 'birthPlace',
        title: 'From',
        value: 'Fresno State'
    }

}

const Td = styled.td`
    font-size: 10px;
    font-weight: bold;
    
    border-bottom: 1px solid #b7b8bd;
`
const TdValue = styled(Td)`
    text-align: center;
`
const TableRow = styled.tr`
    width: 100%;
`
const PlayerInfo: React.SFC<IPlayerInfoProps> = () => {
    return (
        <Container>
            <Table>
                {Object.values(response).map((item:any) =>
                 <TableRow>
                    <Td>{item.title.toUpperCase()}</Td>
                    <TdValue>{item.value}</TdValue>
                </TableRow>)}

            </Table>
        </Container>
    );
}

export default PlayerInfo;