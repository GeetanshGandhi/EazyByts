import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from "../images/logo.png"
import profilepic from "../images/profilepic.png"
import homeIcon from "../images/homeIcon.png"
import exploreIcon from "../images/exploreIcon.png"
import curatedByYouIcon from "../images/curatedByYouIcon.png"
import addCourseIcon from "../images/addCourseIcon.png"
import hamburger from "../images/hamburger.webp";
import { Link, useNavigate } from "react-router-dom";
import { doLogout } from "../backendComm/helpers";
export default function Navbar(props){
    const[loginData, setLoginData] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem("loginUserData")!==null){
            setLoginData(JSON.parse(localStorage.getItem("loginUserData")));
        }
    },[])
    const navigate = useNavigate();
    const handleLogout = () => {
        doLogout(()=>{
            navigate("/");
            window.location.reload();
        })
    }
    const handleLogin = () => {
        navigate("/login");
    }
    //toggle submenu
    const toggleMenu = () => {
        document.getElementById("subMenuWrap").classList.toggle("submenu-open");
    }
    return(
        <nav>
            <div className="title">
                <img src={logo} alt = "alternate"></img>
                <h1 className="titlename">GeetsForGeets</h1>
            </div>
            <div className="navlinks">
                {loginData===null?
                    <button className="login-button" onClick={handleLogin}>LOGIN</button>
                    :
                    <div className="msg-when-loggedin">  
                        <img className="profile-image" src={profilepic} alt="alter"/>
                        <p className="loginuser">{loginData.user_name}</p>
                        <button onClick={handleLogout} className="logout-button">LOGOUT</button> 
                        <img className="hamburger" src={hamburger} alt="alter" onClick={toggleMenu}/>
                    </div>                     
                }
            </div>
            {
                loginData!==null?
                
                <div className="submenu-wrap" id="subMenuWrap">
                    <div className="submenu">
                        <div className="user-info">
                            <img className="submenu-img" src={profilepic} alt="profile img"></img>
                            <p className="submenu-head">{loginData.user_name}</p>
                        </div>
                        <hr/>
                        
                        <Link className='submenu-link' to="/">
                            <div className="submenu-link-wrapper">
                                <img src = {homeIcon}/>
                                <p>Home</p>
                            </div>
                        </Link>
                        <hr/>
                        <Link className='submenu-link' to="/explore">
                            <div className="submenu-link-wrapper">
                                <img src = {exploreIcon}/>
                                <p>Explore</p>
                            </div>
                        </Link>
                        {
                            (loginData!==null && loginData.category==="Instructor")?
                            <>
                                <hr/>
                                <Link className='submenu-link' to="/curatedByYou">
                                    <div className="submenu-link-wrapper">
                                        <img src = {curatedByYouIcon}/>
                                        <p>Curated By You</p>
                                    </div>
                                </Link>
                                <hr/>
                                <Link className='submenu-link' to="/addCourse">
                                    <div className="submenu-link-wrapper">
                                        <img src = {addCourseIcon}/>
                                        <p>Add A Course</p>
                                    </div>
                                </Link>
                            </>:<></>
                        }
                    </div>
                    
                </div>  :<></>
            }
        </nav>
    )
}