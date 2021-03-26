import React, {useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "./SignUp.scss"
import "../../App.scss"

const SignIn = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = async (e) => {
    e.preventDefault()
    const data = {email,password}

    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

    const logIn = async () => {
        const blogPost = await axios.post("/api/users/login", data, config)

        localStorage.setItem('userInfo', JSON.stringify(blogPost))
        return blogPost
    }

    logIn()
    history.push("/")
}
 
    return (
        <div className="sign-in">
            <h1 className="signIn--title">Sing Up</h1>
            <form onSubmit={submitHandler}>
                <div className="form--email">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form--password">
                    <label htmlFor="email">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>

            <div className="signIn--row">
                <p> New Customer? 
                    <Link to="/sign-up">Register</Link>
                </p>
            </div>
        </div>   
    )
}

export default SignIn
