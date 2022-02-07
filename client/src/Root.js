import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main"
import Weather from "./components/Weather"

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='main-content'>

          <Router>
            <Route path='/' exact component={Main} />
            <Switch>
            <Route path='/:id/:location' component={Weather} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
