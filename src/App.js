import React from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Pages/Home"
import Services from "./components/Pages/Services"
import Products from "./components/Pages/Products"
import SignUp from "./components/Pages/SignUp"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/services" exact  component={Services}/>
            <Route path="/products" exact  component={Products}/>
            <Route path="/sign-up" exact  component={SignUp}/>
          </Switch>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
