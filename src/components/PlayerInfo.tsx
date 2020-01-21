import React from 'react'
import styled from 'styled-components/macro';

type key = {
    dob: string,
    age: string,
    birthPlace: string
};

type obj = {
    id: string,
    title: string,
    dob?: string,
    age?: string,
    birthPlace?: string
}
type Response<T> = {
    [P in keyof T]: obj
}
export interface IPlayerInfoProps {

}
const Container = styled.div`
    grid-column: 2 / span 3;
    grid-row: 2 / span 2;
`

const Table = styled.div`
    height: 100%;
    width: 100%;

`

const response: Response<key> = {
    dob: {
        id: 'born',
        title: 'born',
        dob: '05/02/1990'
    },
    age: {
        id: 'age',
        title: 'age',
        age: '26'
    },
    birthPlace: {
        id: 'birthPlace',
        title: 'From',
        birthPlace: 'Fresno State'
    }

}


const PlayerInfo: React.SFC<IPlayerInfoProps> = () => {
    return (
        <Container>
            <Table>
                {Object.values(response).map((item) => <tr><td>{item.title.toUpperCase()}</td></tr>)}

            </Table>
            {/* <table>
                   <tr>
                       <td>Born</td>
                       <td>05/002/1990</td>
                   </tr>
                   <tr>
                       <td>Age</td>
                       <td>05/002/1990</td>
                   </tr>
                   <tr>
                       <td>From</td>
                       <td>05/002/1990</td>
                   </tr>
               </table> */}
        </Container>
    );
}

export default PlayerInfo;