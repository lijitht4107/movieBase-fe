import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({email:'', password:''});

    const handleLogin =(e)=>{
        const {name, value} = e.target;
        setLoginData((prevData)=>({
          ...prevData,
          [name]:value
        }))
    }
    const handleSubmit = (e)=>{
      e.preventDefault();

      axios.post("http://localhost:3001/user/login",loginData).then((response)=>{
        const token = response.data.token;
        
        if(token && response.data.message ==="login successfull"){
          localStorage.setItem('Token',token)
          navigate('/home')
        }
        
        
      })
    }
  return (
    <div >
      <form  onSubmit={handleLogin} action="" className='container'>
         <label htmlFor="email">Email :</label>
        <input type="email" 
                name="email" 
                value={loginData.email}
                onChange={handleLogin}
                className='input-field' 
                id="email" 
                autocomplete="off" 
                pattern="+@example.com" size="30" required/> <br />
        <label htmlFor="password">Password :</label>
        <input type="password" 
                 name='password'
                 value={loginData.password}
                 onChange={handleLogin}
                className='input-field'
                autocomplete="off" 
                minlength="3" maxlength="20" required/>
        <input type="submit" value="Signup" onClick={handleSubmit} className='signup-button' />
      </form>
    </div>
  )
}

export default Login
