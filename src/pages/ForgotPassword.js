import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth/AuthState';
import {
  Title,
  AuthFormArea,
  BackButton,
  Anchor,
  Center,
} from '../utils/common';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { BiArrowBack } from 'react-icons/bi';
import keyIcon from '../assets/key.svg';
import { apiPost } from '../utils/apiHelper';
import { ErrorToast, SuccessToast } from '../utils/toast';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { loading} = useAuth();

  const [tryReset, setTryReset] = useState(false);

  useEffect(() => {
    if (loading) {
      SuccessToast('Loading');
    }

    if (!loading && tryReset) {
      ErrorToast('Invalid Email');
      setTryReset(false);
    }
  });
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
      const response = await apiPost(
        '/auth/forgot-password',
        { email },
        {},
        false
      );      
      console.log(response.status);
      if (response.status == '200') {
        
      //SuccessToast('Loading', 2000);
        console.log('great');
        navigate('/email-sent');
      }
    } catch (error) {
      ErrorToast('Invalid Email');
    }
  };

  return (
    <AuthFormArea>
      <Center style={{ marginBottom: '14px' }}>
        <img src={keyIcon} alt="" />
      </Center>
      <Title>Forgot Password</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Enter Email"
          value={email}
          onChange={handleInputChange}
          helperText="Enter the Email address associated with your account"
          isTrueOrFalse={true}
        />
        <Button type="submit" style={{ marginTop: '94px' }}>
          Reset Password
        </Button>
        <Center>
          <Anchor href="/login">
            <BackButton>
              <BiArrowBack style={{ marginRight: '15px' }} /> Back to Login
            </BackButton>
          </Anchor>
        </Center>
      </form>
    </AuthFormArea>
  );
}

export default ForgotPassword;
