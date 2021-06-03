import React, { useState } from 'react';
import logo from '../images/logo.png'

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <header>
      <img src={logo} alt="logo" />
      <input
        type='text'
        placeholder='Search...'
        value={ inputSearch }
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
