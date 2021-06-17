import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import '../styles/ChartMenu.css';
import MenuOptions from './MenuOptions';

function ChartMenu() {
  const [titulo, setTitulo] = useState('Titulo');
  return(
    <Container maxWidth='1sm'>
      <div className='container-header-chart'>
        <div className='title'>{ titulo }</div>
        <MenuOptions />
      </div>
    </Container>
  );
}

export default ChartMenu;
