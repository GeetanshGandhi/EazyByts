import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';
import { doLogin } from '../backendComm/helpers';
export default function Login() {
    const [loginDetail, setLoginDetail] = useState(
        {
            user_email:'',password:'',user_name : '', category : ''
        }
    )
    const handleFieldChange = (e, field)=>{
        let newval = e.target.value;
        setLoginDetail({
            ...loginDetail, [field]:newval
        })
    }
    const [showpass, setShowpass] = useState(false);
    const handleClickShowPassword=()=>{
        setShowpass(!showpass);
    }
    //going to home page after log in:
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(loginDetail.user_email.trim() ==='') {toast.error("Please provide an email ID");return;}
        if(loginDetail.password.trim() ==='') {toast.error("Please provide a password");return;}
        //sending to server and getting user data (null if incorrect creds):
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/users/login",{
            headers:{"content-type":"application/json"},
            body: JSON.stringify(loginDetail),
            method:"POST"
        })
        .then((res)=>res.json()).then(data=>{
            if(data.user_name ==="null"){
                toast.error("Invalid email or password!");
                return;
            }
            doLogin(data,()=>{
                navigate("/explore");
                window.location.reload(); 
                toast.success("You are now logged in as "+data.user_name);
            })
        })
        .catch(error=>{console.log("error occurred",error)})
        
    }
  return (
    <div className="loginBody">
        <Paper elevation = {10} className = 'login-paper'>
            <p className="login-header">LOG IN</p>

            <div className="textfields">
                <TextField className='textfield' id="outlined-basic" label="EMAIL-ID" variant="outlined" 
                fullWidth value={loginDetail.user_email} onChange={(e)=>handleFieldChange(e,'user_email')}/>
            </div>   
            <div className="textfields">
                <TextField className='textfield' id="outlined-basic" label="Password" variant="outlined" 
                fullWidth value={loginDetail.password} onChange={(e)=>handleFieldChange(e,'password')}
                type = {showpass?"text":"password"}/>
            </div>
            <div className="show-pass">
                <input type="checkbox" onClick={handleClickShowPassword}/>
                <p>{showpass?"Hide Password":"Show Password"}</p>
            </div> 
            <div className="login-btn-in">
                <button onClick={handleSubmit}>Log in</button>
            </div>
            <div className="new-user">
                <p className="newuser-msg">New user? </p>
                <Link to="/Signup" className="newuser-link"><p className='newuser-link'>Signup here</p></Link>    
            </div>      
        </Paper>
        
    </div>
  )
}
