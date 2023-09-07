// Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <button className="cart-button">Carrito de Compras</button>
    </header>
  );
};

export default Header;
