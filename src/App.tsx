import React from 'react';
import logo from './logo.svg';
import './App.css';
import { nbaIcon, downArrow, Menu } from './images';
import { Container, CompoundGrid, Navbar, Icon, MenuItems, DisplayIcon, Sidebar, IconCotainer } from './styles';


const App: React.FC = () => {
  return (
    <Container>
      <CompoundGrid>
        <Navbar>
          <IconCotainer>
            <Icon src={nbaIcon} />
          </IconCotainer>
          <MenuItems>
            <p>SCORES</p>
            <p>SCHEDULE</p>
            <p>NEWS</p>
            <p>STATS</p>
            <p>PLAYERS</p>
          </MenuItems>
          <DisplayIcon>
            {/* <Icon src={} /> */}
            <Icon src={downArrow} style={{ height: '18px', width: '18px', alignSelf: 'center' }} />
          </DisplayIcon>
        </Navbar>
        <Sidebar>
          <Icon src={Menu} style={{ height: '15px', width: "15px" }} />
        </Sidebar>
      </CompoundGrid>
    </Container>

  );
}

export default App;
