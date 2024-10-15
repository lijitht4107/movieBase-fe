import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/user/adduser', userData)
      .then((res) => {
        console.log(res);
        
        const response = res.data.message;
        console.log(response);
        
        if(response  === "signup successfull"){
          
          navigate("/login")
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="container">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="input-field"
          id="name"
          autoComplete="off"
          minLength="3"
          maxLength="20"
          required
        />{' '}
        <br />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="input-field"
          id="email"
          autoComplete="off"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          size="30"
          required
        />{' '}
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
          minLength="3"
          maxLength="20"
          required
        />
        <input type="submit" value="Signup" className="signup-button" />
      </form>
    </div>
  );
};

export default Register;
