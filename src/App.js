import './App.css';

import React from 'react';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  )
}

function Homepage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default App
