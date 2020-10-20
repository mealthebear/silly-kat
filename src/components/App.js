import About from './pages/About.js';
import Header from './Header.js';
import Home from './pages/Home.js';
import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </>
  )
}

export default App;
