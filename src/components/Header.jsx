import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <Container maxWidth='1sm'>
    <header className="header">
      <img src={logo} alt="logo" className='logo-img' />
      <input
        type='text'
        placeholder='Search...'
        value={ inputSearch }
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </header>
    </Container>
  );
}

export default Header;
