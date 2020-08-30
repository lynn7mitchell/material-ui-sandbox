import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import './App.css'
import SideBar from './components/SideBar'
function App() {
  return (
    <div className="App">
      <SideBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
