import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

//Components inports
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <div className='app'>
      <img style={{width:'100%',position:'absolute',zIndex:'-1'}} src={require('./assets/images/bg.svg')} />
      <Switch>
        <Route   path="/"   component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
