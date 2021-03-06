import React from 'react';
import './App.css';
import { nbaIcon, downArrow, Menu } from './images';
import { Container, CompoundGrid, Navbar, Icon, MenuItems, DisplayIcon, Sidebar, IconCotainer, SubContainer } from './styles';
import { PersonalInfo, MiddleContainer, PlayerPosition,PlayerNumber } from './components';

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
            <p>TEAMS</p>
          </MenuItems>
          <DisplayIcon>
            {/* <Icon src={} /> */}
            <Icon src={downArrow} style={{ height: '18px', width: '18px', alignSelf: 'center' }} />
          </DisplayIcon>
        </Navbar>
            {/* <FavoriteContainer /> */}
            <PersonalInfo />
        <Sidebar>
          <Icon src={Menu} style={{ height: '15px', width: "15px" }} />
        </Sidebar>
        <SubContainer>
        </SubContainer>
        <MiddleContainer />
          <div  className="circle"></div>
          {/* col 14 -15 */}
          {/* row 7 -9 */}
          <PlayerNumber number={'13'}/>
          <PlayerPosition position={'F'}/>
      </CompoundGrid>
     
    </Container>

  );
}

export default App;
