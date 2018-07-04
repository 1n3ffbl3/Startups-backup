import React from 'react';

const MenuBar = ({ currentUser }) => {
  let navStyle = {
    margin: 0,
    overflow: 'hidden',
  };

  let liTitleStyle = {
    listStyleType: 'none',
    display: 'inline-block',
    paddingLeft: '30%',
    fontSize: '36px'
  };

  let liUserStyle = {
    listStyleType: 'none',
    display: 'inline-block',
    float: 'right',
    paddingRight: '50px'
  }

  return (
    <nav style={navStyle}>
      <ul>
        <li style={liTitleStyle}>Startups Financial App</li>
        <li style={liUserStyle}>Bonjour {currentUser}</li>
      </ul>
    </nav>
  );
}

export default MenuBar;