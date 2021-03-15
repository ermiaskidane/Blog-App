import React from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Pages/Home"
import Services from "./components/Pages/Services"
import Products from "./components/Pages/Products"
import SignIn from "./components/Pages/SignIn"
import SignUp from "./components/Pages/SignUp"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/services"  component={Services}/>
            <Route path="/products"  component={Products}/>
            <Route path="/sign-in"   component={SignIn}/>
            <Route path="/sign-up"   component={SignUp}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
