import React, { useState } from 'react';
import {
  Container,
  Div,
  MarginStyle,
  Paragraph,
  Title,
} from '../../../utils/common';
import Volume from '../../../assets/volume.svg';
import Key from '../../../assets/BlackKey.svg';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import ToggleButton from '../../../components/common/ToggleButton';

export default function SecurityAndLogin() {
  const [selected, setSelected] = useState(false);
  const [userData, setUserData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { currentPassword, newPassword, confirmPassword } = userData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkCurrentPassword = () => {
    if (currentPassword.length > 0) {
      setIsValid(true);
      setErrors((prevState) => ({
        ...prevState,
        currentPassword: '',
      }));
      return true;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        currentPassword: 'Enter current password',
      }));
      return false;
    }
  };

  const checkPasswordLength = () => {
    if (newPassword.length >= 8) {
      setIsValid(true);
      setErrors((prevState) => ({
        ...prevState,
        newPassword: '',
      }));
      return true;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        newPassword: 'Password is too short',
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
      setUserData({ currentPassword, newPassword, confirmPassword });
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
    } else if (checkCurrentPassword()) {
      setIsValid(true);
    }
    return isValid;
  };
  return (
    <Div>
      <Title style={{ textAlign: 'left' }}>Security and Login</Title>
      <Paragraph
        style={{ color: '#000000', fontWeight: 'bold', fontSize: '16px' }}
      >
        RECOMMENDED
      </Paragraph>
      <Paragraph
        style={{ color: '#000000', fontWeight: 'bold', fontSize: '16px' }}
      >
        <img src={Volume} alt="" style={{paddingRight:'5px'}}/> Security alert
      </Paragraph>
      <Container>
        <Paragraph style={{ marginLeft: '3%' }}>
          Improve the security of your account by getting alert when someone
          tries logging in to your account from an unknown device or broswer.
        </Paragraph>
        <Container style={{ marginLeft: '10%' }}>
          {' '}
          <ToggleButton
            selected={selected}
            toggleSelected={() => {
              setSelected(!selected);
            }}
            buttonColor="#000000"
          />{' '}
          <Paragraph
            style={{ color: '#000000', fontSize: '16px', marginLeft: '5%' }}
          >
            Email
          </Paragraph>
        </Container>
      </Container>
      <Paragraph
        style={{ color: '#000000', fontWeight: 'bold', fontSize: '16px' }}
      >
        LOGIN
      </Paragraph>
      <Paragraph
        style={{ color: '#000000', fontWeight: 'bold', fontSize: '16px' }}
      >
        <img src={Key} alt="" /> Change Password
      </Paragraph>
      <MarginStyle style={{ marginTop: '3%', width: '50%', position:'relative' }}>
        <form>
          <Input
            type="password"
            label="Current Password"
            name="currentPassword"
            value={currentPassword}
            onChange={changeHandler}
            onBlur={checkCurrentPassword}
            error={errors.currentPassword}
            errorMessage={errors.currentPassword}
          />
          <MarginStyle style={{ marginTop: '2%' }}>
            {' '}
            <Input
              type="password"
              label="New Password"
              name="newPassword"
              value={newPassword}
              onChange={changeHandler}
              onBlur={checkPasswordLength}
              error={errors.password}
              errorMessage={errors.password}
            />
          </MarginStyle>

          <MarginStyle style={{ marginTop: '2%' }}>
            {' '}
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

          <MarginStyle style={{ marginTop: '2%' }}>
            {' '}
            <Button
              type="submit"
              children="Save"
              onClick={submitHandler}
            />
          </MarginStyle>
        </form>
      </MarginStyle>
    </Div>
  );
}
