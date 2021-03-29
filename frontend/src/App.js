import React, { useState, useEffect } from "react"
import './App.scss';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Pages/Home"
import Services from "./components/Pages/Services"
import AddBlog from "./components/Pages/AddBlog/AddBlog"
import UpdateArticle from "./components/Pages/Update/UpdateArticle"
import AllBlogs from "./components/Pages/Blogs/Blogs"
import Blog from "./components/Pages/Blogs/Blog"
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
            <Route path="/products"  component={AddBlog}/>
            <Route path="/update/:id"  component={UpdateArticle}/>
            <Route path="/blogs/all"  component={AllBlogs}/>
            <Route path="/blog/:slug"  component={Blog}/>
            <Route path="/sign-in"   component={SignIn}/>
            <Route path="/sign-up"   component={SignUp}/>
          </Switch>
      </Router>
    </>
  );
} 
 
export default App;
