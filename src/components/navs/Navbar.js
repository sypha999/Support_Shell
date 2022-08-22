import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Chat from '../../assets/Chat1.svg';
import Notification from '../../assets/Notifications1.svg';
import Settings from '../../assets/Settings-2.svg';
import User from '../../assets/User.svg';
import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarArea = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  postion: fixed;
  z-index: 100;
  top: 0;
`;

const NavbarIconsArea = styled.div`
  width: 154px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarIcon = styled.div`
  width: 38px;
  height: 38px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

const DropDown = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  float: right;
`;

const ProfileDropdown = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`;

const Username = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin-left: 5px;
`;

const DropdownCaret = styled.div`
  margin-left: 5px;
`;

export default function Navbar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggle = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const DropdownArea = styled.div`
    display: ${toggleDropdown ? 'block' : 'none'};
    position: absolute;
    background-color: #ffffff;
    min-width: 316px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 6px;
    padding: 32px 26px;
    right: 0;
  `;

  const DropdownMenuItem = styled.a`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #000000;
    &:hover {
      color: #000000;
    }
  `;

  return (
    <NavbarArea>
      <Input type="text" placeholder="Search" style={{ width: '445px' }} />
      <NavbarIconsArea>
        <NavbarIcon>
          <img src={Notification} alt="Notification" />
        </NavbarIcon>
        <NavbarIcon>
          <img src={Chat} alt="Message" />
        </NavbarIcon>
        <Link to="/admin/settings" style={{ textDecoration: 'none' }}>
          <NavbarIcon>
            <img src={Settings} alt="Settings" />
          </NavbarIcon>
        </Link>
      </NavbarIconsArea>
      <DropDown onClick={() => toggle()}>
        <ProfileDropdown>
          <Avatar src={User} alt="Avatar" />
          <Username>Adekunle</Username>
          <DropdownCaret>
            {toggleDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </DropdownCaret>
        </ProfileDropdown>
        <DropdownArea>
          <DropdownMenuItem>
            <p>Personal Info</p>
            <FaAngleRight />
          </DropdownMenuItem>
          <Link
            to="/admin/settings/security"
            style={{ textDecoration: 'none' }}
          >
            <DropdownMenuItem>
              <p>Change Password</p>
              <FaAngleRight />
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <p>Logout</p>
            <FaAngleRight />
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem>
            <p>Privacy Policy</p>
          </DropdownMenuItem>
        </DropdownArea>
      </DropDown>
    </NavbarArea>
  );
}
