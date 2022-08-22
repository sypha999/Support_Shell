import React from 'react';
import { Center, BackButton, Anchor } from '../utils/common';

export default function Landing() {
  return (
    <div>
      <Center>
        <Anchor href="/admin/home">
          <BackButton>Admin Home</BackButton>
        </Anchor>
        <Anchor href="/admin/change-password">
          <BackButton>Change Password</BackButton>
        </Anchor>
        <Anchor href="/email-sent">
          <BackButton>Email Sent</BackButton>
        </Anchor>
        <Anchor href="/reset-password">
          <BackButton>Reset Password</BackButton>
        </Anchor>
        <Anchor href="/forgot-password">
          <BackButton>Forgot Password</BackButton>
        </Anchor>
        <Anchor href="/login">
          <BackButton>Login</BackButton>
        </Anchor>
        <Anchor href="/new-login">
          <BackButton>First Login</BackButton>
        </Anchor>
      </Center>
    </div>
  );
}
