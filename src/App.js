import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CreateChart from './pages/CreateChart';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/create' component={ CreateChart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
