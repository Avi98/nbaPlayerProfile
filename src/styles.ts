import styled from "styled-components/macro";



export const Container = styled.div`
  height: 100vh;
  width: 100vw;
 
  --grey:#e8e9eb;
  --blue: #14387c;
  --white: #fdfefe;
  --textGrey: #696a6d;
  --textBlack: #091124;
  --verticalPadding: 4rem;
  --verticalSmPadding: 2rem;
  --smallSpace: 2rem;
  --bgGreyColor: #dcdde2;
  --verticalLGPadding: 7rem;
  --circleGray:#cfd3da;
  `
export const CompoundGrid = styled.div`
    display:grid;
    height: 100%;
    background-color: var(--grey);
    grid-template-rows: 2.5rem 2em 2.5rem  2.5rem [name-start]minmax(var(--verticalSmPadding), auto)[name-end] var(--smallSpace) [clubName-start] 2rem[clubName-end] var(--verticalSmPadding) [measurement-start]minmax(var(--verticalPadding), auto)[measurement-end] minmax(var(--verticalSmPadding), auto) [sub-start] minmax(7rem, auto) 7rem [sub-end];
    grid-template-columns:  4fr [content-start] 5fr[content-end] 10fr 9fr 2fr 8fr 3fr 7fr 5fr 6fr 6fr 5fr 7fr 3fr 8fr 2fr 9fr 1fr 10fr;
    .circle{
  grid-row:5 / sub-start;
  grid-column:clubName-start / 7;
  border: 2px solid var(--circleGray);
	border-radius: 50%;
	width: 38.75rem;
	height: 38.75rem;
	z-index: 86;
  }
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

  export const IconCotainer = styled.div`
      grid-column: icon-start / icon-end;
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
    >p{
      font-size: 0.5rem;
      font-weight: 700;
      color: var(--textGrey);
    }
  `
export const DisplayIcon = styled.div`
    width: 50px;
    height: 50px;
  `

  export const SubContainer = styled.div`
  grid-row:sub-start / sub-end;
  grid-column: span 25; 
  background: var(--bgGreyColor); 
  `