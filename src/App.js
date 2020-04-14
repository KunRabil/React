import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rabil from "./Rabil";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Rabil2 from "./Rabil2";

function App() {
  return (
    <Router>

        <Route exact path='/' component={Rabil} />
        <Route path='/page2' component={Rabil2} />
    </Router>
  );
}

export default App;
