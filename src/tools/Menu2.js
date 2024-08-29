import React, { useState } from 'react';
import './Menu2.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="menu-container" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="menu-button">Categories</button>
      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <button id='menu-event2'><i class="fa-solid fa-house"></i><br></br>Home</button>
        <button id='menu-event2'><i class="fa-solid fa-school"></i><br></br>School</button><br></br>
        <button id='menu-event2'><i class="fa-solid fa-socks"></i><br></br>Socks</button>
        <button id='menu-event2'><i class="fa-solid fa-ring"></i><br></br>Accessories</button><br></br>
      </div>
    </div>
  );
};

export default Menu;