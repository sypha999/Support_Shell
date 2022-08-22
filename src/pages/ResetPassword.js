import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BackButton,
  MarginStyle,
  AuthFormArea,
  Center,
  Heading,
} from '../utils/common';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Success from '../components/modal/Success';

function ResetPassword() {
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
    <Center>
      <AuthFormArea>
        <Heading style={{ fontSize: '24px' }}>Set a new password</Heading>
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

          <Center>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
              <BackButton>
                <BiArrowBack style={{ marginRight: '15px' }} /> Back to Login
              </BackButton>
            </Link>
          </Center>
        </form>
      </AuthFormArea>
    </Center>
  );
}
export default ResetPassword;
