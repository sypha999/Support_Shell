import React from 'react';
import styled from 'styled-components';
import { Center } from '../utils/common';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
`;

export default function AuthLayout() {
  return (
    <PageLayout>
      <div>
        <Center style={{ marginBottom: '15px' }}>
          <img src={Logo} alt="Logo" style={{ marginLeft: '-35px' }} />
        </Center>
        <Outlet />
      </div>
    </PageLayout>
  );
}
