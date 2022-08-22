import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/navs/Navbar';
import Sidebar from '../components/navs/Sidebar';

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
`;
const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 30px;
  overflow-y: auto;
  position: relative;
  background-color: #f5f5f5;
`;

export default function DashboardLayout() {
  return (
    <PageContainer>
      <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar />
        <ContentArea>
          <Outlet />
        </ContentArea>
      </div>
    </PageContainer>
  );
}
