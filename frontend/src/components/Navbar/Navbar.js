import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { Button } from '../Button/Button'
import "./Navbar.scss"

const Navbar = () => {
    const [userName, setUserName] = useState("")
    const [token, setToken] = useState(false)

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960){
            // wont display the button tag
            setButton(false)
        } else {
            setButton(true)
        }
    }

    // useEffect(() => {
       
    // }, [])

    // fetch the username from the localStorage

    useEffect(() => {
        showButton()
        const storedData = JSON.parse(localStorage.getItem("userInfo"));
        console.log(storedData, "local")
        if(
            storedData &&
            storedData.data.token
        ) {
            setUserName(storedData.data.name)
            setToken(storedData.data.token)
            // console.log(storedData, "local")
        }
    }, [userName, token])

    window.addEventListener("resize", showButton)

    const logoutHandler = () => {
        setUserName(null)
        setToken(null)
        localStorage.removeItem("userInfo")
    }

    console.log(userName)
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/blogs/all" className="navbar-logo" onClick={closeMobileMenu}>
                       TRVL <i className="fab fa-typo3"/>
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? "fas fa-times" : "fas fa-bars"} />
                   </div>
                   <ul className={click ? "nav-menu active": "nav-menu"}>
                       <li className="nav-item">
                           <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li> 
                       <li className="nav-item">
                           <Link to="/blogs/all" className="nav-links" onClick={closeMobileMenu}>
                               Blogs
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                               Add Blog
                           </Link>
                       </li>
                       {userName ? (
                           <li className="nav-item">
                            <Link to="/" className="nav-links" 
                            onClick={logoutHandler}>
                                {userName}
                            </Link>
                           </li>
                       ):(
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                       </li>
                       )}
                   </ul>
                   {/* {button && userName ? (
                       <div className="nav-links-username" onClick={logoutHandler}>{userName}</div>
                   ) : (
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                   )} */}
                </div>
            </nav> 
        </>
    )
}

export default Navbar
