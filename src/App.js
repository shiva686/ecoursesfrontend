import React ,{useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch , Route , Redirect} from 'react-router-dom';
import Dashboard from './dashboard'
import Courses from './courses'
const App = ()=> {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/Course' component={Courses}/>
      <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
