import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/actions/userActions'
import "./SignUp.scss"
import "../../App.scss"
 
const SignUp = ({history}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
 
    useEffect(() => {
        if (userInfo) {
          history.push("/")
        }
      }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
          setMessage('Passwords do not match')
        } else {
          dispatch(register(name, email, password))
        }
      }

    return (
        <div className="sign-up">
            <h1 className="signUp--title">Sing Up</h1>
            {message && <div style={{fontSize: "10px"}}>{message}</div>}
            {error && <div>{error}</div>}
            {loading && <div style={{fontSize: "10px"}}>Loading...</div>}
            <form onSubmit={submitHandler}>
                <div className="form--name">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                <div className="form--confirmPassword">
                    <label htmlFor="email">Confirm Password</label>
                    <input 
                    type="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

            <div className="signup--row">
                <p> Have an Account? 
                    <Link to="/sign-in">Login</Link>
                </p>
            </div>
        </div>   
    )
}

export default SignUp
