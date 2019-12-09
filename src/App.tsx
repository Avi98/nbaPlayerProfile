import React from 'react';
import logo from './logo.svg';
import './App.css';
import { nbaIcon, downArrow, Menu } from './images';
import { Container, CompoundGrid, Navbar, Icon, MenuItems, DisplayIcon, Sidebar } from './styles';


const App: React.FC = () => {
  return (
    <Container>
      <CompoundGrid>
        <Navbar>
          <Icon src={nbaIcon} />
          <MenuItems>
            <div>She</div>
            <div>She</div>
            <div>She</div>
            <div>She</div>
            <div>She</div>
          </MenuItems>
          <DisplayIcon>
            {/* <Icon src={} /> */}
            <Icon src={downArrow}/>
          </DisplayIcon>
        </Navbar>
        <Sidebar>
          <Icon src ={Menu} style={{height: '15px', width:"15px"}}/>
        </Sidebar>
      </CompoundGrid>
    </Container>

  );
}

export default App;
