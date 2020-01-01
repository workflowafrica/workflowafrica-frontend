import React from "react";
import { Switch, Route } from "react-router";
import Home from "../Views/frontPage/Home";
import About from "../Views/About";
import Contact from "../Views/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => (
  <div className="app-layout">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </div>
);

export default AppLayout;
