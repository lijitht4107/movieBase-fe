import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Failed to parse token:', e);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/user/login", loginData)
      .then((response) => {     
        console.log(response.data.token);
        if (response.data.token ) {
          console.log("token is received",response.data.token);
          
          localStorage.setItem('token', response.data.token);
          const parsedToken = parseJwt(response.data.token);
          localStorage.setItem('user', JSON.stringify(parsedToken));
          navigate('/home');
        } else {
          console.log("credentials not filled");
          
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='container'>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleLogin}
          className='input-field'
          id="email"
          
          required
        /> <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name='password'
          value={loginData.password}
          onChange={handleLogin}
          className='input-field'
          minLength="3"
          maxLength="20"
          required
        />
        <input type="submit" value="Login" className='signup-button' />
      </form>
    </div>
  );
};

export default Login;
