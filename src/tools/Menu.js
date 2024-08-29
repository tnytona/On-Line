import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="menu-container" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="menu-button">Help</button>
      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <button id='menu-event'><i class="fa-solid fa-user"></i><br></br>Account</button>
        <button id='menu-event'><i class="fa-solid fa-car"></i><br></br>Delivery</button><br></br>
        <button id='menu-event'><i class="fa-solid fa-cart-shopping"></i><br></br>Cart</button>
        <button id='menu-event'><i class="fa-solid fa-rotate-left"></i><br></br>return</button><br></br>
        <button id='menu-event'><i class="fa-solid fa-circle-info"></i><br></br>Services</button>
        <button id='menu-event'><i class="fa-solid fa-gear"></i><br></br>Settings</button><br></br>
      </div>
    </div>
  );
};

export default Menu;