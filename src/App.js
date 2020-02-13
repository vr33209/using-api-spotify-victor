import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
export default function App() {
  return (
    <>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Login} />
        </Switch>
    </>
  )
}