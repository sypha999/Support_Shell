import React, { useState } from 'react';
import styled from 'styled-components';
import Polygon from '../../assets/Polygon.svg';
import Polygon1 from '../../assets/Polygon1.svg';
import User from '../../assets/User.svg';
import User1 from '../../assets/User1.svg';
import Group from '../../assets/Group.svg';
import Group1 from '../../assets/Group1.svg';
import Signout from '../../assets/Sign-out.svg';
import Settings from '../../assets/Settings-2.svg';
import SupportShell from '../../assets/SupportShell.svg';
import DoubleRight from '../../assets/DoubleRight.svg';
import DoubleLeft from '../../assets/DoubleLeft.svg';
import Navlink from './Navlink';

const NavIconContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ToggleIcon = styled.div`
  position: absolute;
  top: 80px;
  float: right;
  right: -10px;
  z-index: 1;
  cursor: pointer;
`;

export default function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const SidebarArea = styled.div`
    width: ${collapsed ? '117px' : '288px'};
    height: 100vh;
    position: relative;
    transition: width 0.2s;
    flex-shrink: 0;
  `;

  const MenuItemsArea = styled.div`
    padding: 0 ${collapsed ? '29px' : '26px'};
    padding-bottom: 10px;
    margin: 29px 0;
  `;

  const BottomNavs = styled.div`
    position: absolute;
    bottom: 29px;
    width: ${collapsed ? '65px' : '236px'};
  `;

  const NavbarBrand = styled.div`
    width: ${collapsed ? '117px' : '288px'};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const NavLabel = styled.div`
    white-space: nowrap;
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    color: #21334f;
    display: ${collapsed ? 'none' : 'block'};
  `;

  return (
    <SidebarArea>
      <NavbarBrand>
        <NavIconContainer>
          <img src={SupportShell} alt="Support Shell" />
        </NavIconContainer>
        <NavLabel>Support Shell</NavLabel>
      </NavbarBrand>
      <ToggleIcon onClick={() => toggle()}>
        <img src={collapsed ? DoubleRight : DoubleLeft} alt="" />
      </ToggleIcon>
      <MenuItemsArea>
        <Navlink
          label="Home"
          url="/admin/home"
          icon={Polygon1}
          activeIcon={Polygon}
          collapsed={collapsed}
        />
        <Navlink
          label="Create User"
          url="/admin/create-user"
          icon={User}
          activeIcon={User1}
          collapsed={collapsed}
        />
        <Navlink
          label="Trust Group"
          url="/admin/trust-group"
          icon={Group}
          activeIcon={Group1}
          collapsed={collapsed}
        />
        <BottomNavs>
          <Navlink
            label="Settings"
            url="/admin/settings/home"
            icon={Settings}
            collapsed={collapsed}
          />
          <Navlink
            label="Logout"
            url="/"
            icon={Signout}
            collapsed={collapsed}
          />
        </BottomNavs>
      </MenuItemsArea>
    </SidebarArea>
  );
}
