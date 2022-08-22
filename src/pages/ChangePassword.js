import React, { useState } from 'react';
import Input from '../components/common/Input';
import {
  WelcomeText,
  AuthFormArea,
  MarginStyle,
  Center,
  Heading,
} from '../utils/common';
import Button from '../components/common/Button';
import privacy from '../assets/privacy.svg';
import { useNavigate } from 'react-router-dom';
import Success from '../components/modal/Success';

function ChangePassword() {
  const [userData, setUserData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

  const { newPassword, confirmPassword } = userData;

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const checkPasswordLength = () => {
    if (newPassword.length >= 8) {
      setIsValid(true);
      setErrors((prevState) => ({
        ...prevState,
        password: '',
      }));
      return true;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        password: 'Password is too short',
      }));
      return false;
    }
  };

  const checkPasswordsMatch = () => {
    if (newPassword === confirmPassword) {  
      setErrors((prevState) => ({
      ...prevState,
      confirmPassword: '',
    }));
      return true;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: 'Passwords do not match',
      }));
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate() && checkPasswordsMatch()) {
      let newPassword = '';
      let confirmPassword = '';
      setUserData({ newPassword, confirmPassword });
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/admin/home');
      }, 2000);
    } //else {
    //   // make API call
    // }
  };

  const validate = () => {
    if (newPassword.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        password: 'Please enter your password',
      }));
    } else if (checkPasswordLength()) {
      setIsValid(true);
    }
    return isValid;
  };

  if (showSuccess) {
    return <Success />;
  }
  return (
    <Center style={{ height: '100%' }}>
      <AuthFormArea>
        <Center>
          <img src={privacy} alt="privacy" />
        </Center>
        <WelcomeText>Hi, Welcome to your account</WelcomeText>
        <Heading>Reset password</Heading>
        <form>
          <Input
            type="password"
            label="Password"
            name="newPassword"
            value={newPassword}
            onChange={changeHandler}
            onBlur={checkPasswordLength}
            helperText="Must be atleast 8 characters"
            error={errors.password}
            errorMessage={errors.password}
          />

          <MarginStyle>
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={changeHandler}
              onBlur={checkPasswordsMatch}
              error={errors.confirmPassword}
              errorMessage={errors.confirmPassword}
            />
          </MarginStyle>

          <MarginStyle>
            <Button
              type="submit"
              children="Reset Password"
              onClick={submitHandler}
            />
          </MarginStyle>
        </form>
      </AuthFormArea>
    </Center>
  );
}
export default ChangePassword;
