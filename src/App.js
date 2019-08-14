import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Main from './routes/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Main }/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
