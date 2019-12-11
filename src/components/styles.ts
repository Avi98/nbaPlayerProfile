import styled from "styled-components";


export const MeasurementContainer = styled.div`
    grid-column: 3 / span 2;
    grid-row: measurement-start / measurement-end;

    display:grid;
    grid-template-columns: repeat(2, 1fr);
    .col{
        display:flex;
        flex-direction:column;

        .val{
            margin-top: 0.8rem ;
            font-size: 2rem;
            margin-bottom: 0;
            .block{
                display:block;
                font-size: 0.8rem;
                margin-top: 0.2rem;
            }
            >sub{
                font-size: 1rem;
                vertical-align:baseline;
                margin: 0 0.4rem;
            }
        }
        >p:first-child{
            margin: 0 0 auto 0;
            text-transform:uppercase;
            font-size: 0.6rem;
            font-family: sans-serif;
            font-weight: 700;

        }
    }
`