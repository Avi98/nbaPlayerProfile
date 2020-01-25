import React from 'react'
import styled from 'styled-components/macro';
import { Response, key } from '../api';


export interface IPlayerInfoProps {
    response: Response<key>
}
const Container = styled.div`
    grid-column: 2 / span 3;
    grid-row: 2;
`

const Table = styled.table`
    height: 100%;
    width: 100%;

`



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
const PlayerInfo: React.SFC<IPlayerInfoProps> = ({response}) => {
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