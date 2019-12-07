import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from "react-router";
import AppLayout from "./Containers/AppLayout";

// Import styles
import "./assets/styles/workflow.scss"
import './assets/styles/index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppLayout} />
      </Switch>
    </Router>
  );
}

export default App;
