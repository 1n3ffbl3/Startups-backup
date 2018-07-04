import React from 'react';

const Navbar = ({ currentUser }) => {
  return (
    <div>
      <h2 className="app-name">Startup App</h2> 
      <h2 className="current-user-navbar">Bonjour {currentUser}</h2>
    </div>
  );
}

export default Navbar;