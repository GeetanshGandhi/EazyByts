import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Signup() {
    const [user_email, setUser_email] = useState('');
    const [password, setPassword] = useState('');
    const [user_name, setUser_name] = useState('');
    const [category, setCategory] = useState('Student');
    const [showpass, setShowpass] = useState(false);
    const handleClickShowPassword=()=>{
        setShowpass(!showpass);
    }
    const handleCategoryChange = (e)=> {
      setCategory(e.target.value);
    }
    //redirect to login page
    const navigate = useNavigate();
    const handleSignupClick = () => {
      if(user_name ==='') {toast.error("Empty Name field!");return;}
      if(user_email ===''){toast.error("Empty Email ID field!");return;}
      if(password ===''){toast.error("Empty Password field!");return;}
      const userDetails = {user_email, password, user_name, category};
      fetch(process.env.REACT_APP_BACKEND_URL+'api/v1/users/add',{
        method: "POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(userDetails)
      }).then(()=>{
        toast.success("Registration Successful! Please log in to continue");
        navigate("/login");
      })
    }
  return (
    <div className="loginBody">
        <Paper elevation = {10} className = 'login-paper'>
            <p className="login-header">SIGN UP</p>
            <div className="textfields">
                <TextField className='textfield' id="outlined-basic" label="Full Name" variant="outlined" size = "small"
                fullWidth value={user_name} onChange={(e)=>{setUser_name(e.target.value)}}/>
            </div> 
            <div className="textfields">
                <TextField className='textfield' id="outlined-basic" label="EMAIL-ID" variant="outlined" size = "small"
                fullWidth value={user_email} onChange={(e)=>{setUser_email(e.target.value)}}/>
            </div>   
            <div className="textfields">
                <TextField className='textfield' id="outlined-basic" label="Password" variant="outlined" size = "small"
                fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}
                type = {showpass?"text":"password"}/>
            </div>
            <div className="show-pass">
                <input type="checkbox" onClick={handleClickShowPassword}/>
                <p>{showpass?"Hide Password":"Show Password"}</p>
            </div> 
            <div className="category-radio">
              <p>You are a: </p>
                <select name = "category" id = "category" onChange={handleCategoryChange}>
                  <option value = "Student">Student</option>
                  <option value = "Instructor">Instructor</option>
                </select>
            </div>
            <div className="login-btn-in">
                <button onClick={handleSignupClick}>Sign up</button>
            </div>
            <div className="new-user">
                <p className="newuser-msg">Already registered? </p>
                <Link to="/Login" className="newuser-link">Log in here</Link>    
            </div>     
        </Paper>
        
    </div>
  )
}
