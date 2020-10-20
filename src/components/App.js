import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={null} />
        <Route exact path='/about' component={null} />
      </Switch>
    </>
  )
}

export default App;
