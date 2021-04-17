import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            
          <Route exact path="/" component={Home}/>
          <Route exact path="/header" component={Header}/>
              
        </Switch>
      </div>
    </Router>
  );
}

export default App;
