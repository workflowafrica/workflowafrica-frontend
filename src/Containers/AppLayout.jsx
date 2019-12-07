import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../Views/Home'
import About from '../Views/About'
import Navbar from '../components/Navbar'

const AppLayout = () => <div className="app-layout">
  <Navbar />
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </Switch>
</div>

export default AppLayout