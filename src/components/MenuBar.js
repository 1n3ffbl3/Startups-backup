import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

const MenuBar = ({ currentUser }) => {

  return (
    <Menu secondary>
      <Menu.Item name='Startups Financial App' active={true} />
      <Menu.Menu position='right'>
        <Menu.Item
          name='Bonjour {currentUser}'
        />
      </Menu.Menu>
    </Menu>
    // <nav>
    //   <ul>
    //     <li>Startups Financial App</li>
    //     <li>Bonjour {currentUser}</li>
    //   </ul>
    // </nav>
  );
}

export default MenuBar;