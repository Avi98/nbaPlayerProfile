import styled from "styled-components";



export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  --grey:#e1e2e5;
  --blue: #14387c;
  --white: #fcfdfd;

  `
export const CompoundGrid = styled.div`
    display:grid;
    height: 100%;
    background-color: var(--grey);
    grid-template-rows: 40px 4em 40px;
    grid-template-columns:  4fr 10fr 9fr 2fr 8fr 3fr 7fr 5fr 6fr 6fr 5fr 7fr 3fr 8fr 2fr 9fr 1fr 10fr;
    `
export const Sidebar = styled.div`
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    background-color:var(--blue);
    grid-row: 1 / -1;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
  `

export const Navbar = styled.div`
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    display: flex;
    background-color: #fff;
    justify-content:space-between;
  `

export const Icon = styled.img`
    grid-column: 1 / 2;
    height: 40px;
    align-self: center;
  `

export const MenuItems = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    justify-content: space-around;
    width: 40%;
  `
export const DisplayIcon = styled.div`
    width: 50px;
    height: 50px;
  `