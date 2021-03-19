import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./SignUp.scss"
import "../../App.scss"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    return (
        <div className="sign-in">
            <h1 className="signIn--title">Sing Up</h1>
            <form>
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