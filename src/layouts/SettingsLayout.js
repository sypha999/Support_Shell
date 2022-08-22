import { PageTitle, Paragraph } from '../utils/common';
import NavIcon from '../assets/NavIcon.svg';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
`;
const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  padding: 30px 60px;
  background: #ffffff;
`;

const Sidebar = styled.div`
  width: 259px;
  background: #21334f;
  padding: 20px;
  min-height: 100%;
`;

const SidebarMenu = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 4px;
`;

const MenuTitle = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
`;

export default function SettingsLayout() {
  return (
    <div style={{ height: '100%' }}>
      <>
        <PageTitle>Settings</PageTitle>
        <Paragraph>Manage your teams and preferences here</Paragraph>
      </>
      <PageContainer>
        <Sidebar>
          <Link to="/admin/settings/home" style={{ textDecoration: 'none' }}>
            <SidebarMenu>
              <MenuTitle>General Settings</MenuTitle>{' '}
              <MenuTitle>
                <img src={NavIcon} alt="" />
              </MenuTitle>
            </SidebarMenu>
          </Link>
          <Link
            to="/admin/settings/security"
            style={{ textDecoration: 'none' }}
          >
            <SidebarMenu>
              {' '}
              <MenuTitle>Security and Login</MenuTitle>{' '}
              <MenuTitle>
                <img src={NavIcon} alt="" />
              </MenuTitle>
            </SidebarMenu>
          </Link>
          <Link
            to="/admin/settings/manage-groups"
            style={{ textDecoration: 'none' }}
          >
            <SidebarMenu>
              <MenuTitle>Manage Groups</MenuTitle>{' '}
              <MenuTitle>
                <img src={NavIcon} alt="" />
              </MenuTitle>
            </SidebarMenu>
          </Link>
          <Link
            to="/admin/settings/notifications"
            style={{ textDecoration: 'none' }}
          >
            <SidebarMenu>
              {' '}
              <MenuTitle>Notifications</MenuTitle>{' '}
              <MenuTitle>
                <img src={NavIcon} alt="" />
              </MenuTitle>
            </SidebarMenu>
          </Link>
        </Sidebar>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </PageContainer>
    </div>
  );
}
