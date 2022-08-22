import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useAuth } from '../context/auth/AuthState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SuccessToast, ErrorToast} from '../utils/toast';

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

const AuthFormArea = styled.div`
  padding: 46px 90px;
  background-color: #ffffff;
  max-width: 100%;
  width: 700px;
`;

const Login = ({ newLogin }) => {

  const { loading, login, isAuthenticated, user,state } = useAuth();
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: '',
  });

  const [tryLogin, setTrylogin] = useState(false);

  useEffect(() => {
    if(loading){
      SuccessToast('Loading');
    } 

    if(isAuthenticated && !loading){
      SuccessToast('Login Successful'); 
    } 
    
    if(!isAuthenticated && !loading && tryLogin){
        ErrorToast('Invalid Email or Password');
        setTrylogin(false);
    }
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTrylogin(true);
    login(formDetails);
  };
  return (
    <AuthFormArea>
      <Title>Login to your account</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          value={formDetails.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          isTrueOrFalse={true}
        />
        <Input
          label="Password"
          value={formDetails.password}
          onChange={handleInputChange}
          type="password"
          name="password"
          placeholder="Password"
          isTrueOrFalse={true}
        />
        {!newLogin && <Link to="/forgot-password">Forgot Password?</Link>}
        <Button style={{ marginTop: '42px' }} type="submit">
          Login
        </Button>
      </form>
    </AuthFormArea>
  );
};

export default Login;
