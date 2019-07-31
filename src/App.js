import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import Login from './pages/login/Login';
import Main from './components/layout/main/Main';
import NotFind from './pages/notFind/NotFind';
import Home from './pages/home/Home';
import Connect from './pages/uesr/connect/Connect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: window.localStorage.getItem('loggedIn')
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" render={ () =>
            this.state.loggedIn ? (
              <Main>
                <Switch>
                  <Route exact path="/" component={ Home }/>
                  <Route path="/user/connect" component={ Connect }/>
                  <Route component={ NotFind }/>
                </Switch>
              </Main>
            ) : (
              <Redirect to="/login"/>
            )
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
