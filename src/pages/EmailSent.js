import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import {
  Title,
  AuthFormArea,
  BackButton,
  Anchor,
  Center,
} from '../utils/common';
import email from '../assets/email.svg';
import { BiArrowBack } from 'react-icons/bi';

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  padding-bottom: 40px;
`;

const AfterText = styled.p`
  font-size: 14px;
  text-align: center;
  padding-top: 26px;
`;

const AfterTextLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #14a800;
  cursor: pointer;
  &:hover {
    color: #14a800;
  }
`;

export default function EmailSent() {
  return (
    <AuthFormArea>
      <Center>
        <img src={email} alt="Email" />
      </Center>
      <Title>Check your email</Title>
      <Paragraph>
        We sent a password reset link to admin1234@gmail.com
      </Paragraph>
      <Center>
        <Button
          style={{
            width: '289px',
            background: '#14A800',
            border: '1px solid #14A800',
          }}
        >
          Open email app
        </Button>
      </Center>
      <AfterText>
        Don’t receive the email?{' '}
        <AfterTextLink>Click to Resend link</AfterTextLink>
      </AfterText>
      <Center>
        <Anchor href="/login">
          <BackButton>
            <BiArrowBack style={{ marginRight: '15px' }} /> Back to login
          </BackButton>
        </Anchor>
      </Center>
    </AuthFormArea>
  );
}
