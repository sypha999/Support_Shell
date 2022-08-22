import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import successgif from '../../assets/successful.gif';
import { BackButton, Center, Heading, Middle, Tab } from '../../utils/common';

const Bold = styled.b`
  font-weight: bold;
`;

export default function UserCreated({ UserId }) {
  return (
    <Middle
      style={{
        heigh: 'inherit',
      }}
    >
      <Tab>
        <img
          src={successgif}
          alt=""
          style={{ maxWidth: '45%', height: '45%'}}
          width={450}
        />
        <Heading style={{ color: '#000000', fontSize: '45px' }}>
          Created Successfully{' '}
        </Heading>
        <Center>
          <BackButton
            style={{
              color: '#14A800',
              border: '#14A800 2px solid',
              background: '#ffffff',
              fontWeight: 'normal',
              fontSize: '24px',
              width: '50%',
            }}
          >
            User Login ID <Bold>1234567890{UserId}</Bold>
          </BackButton>
        </Center>
        <Center>
          <Link to="/admin/home" style={{ textDecoration: 'none' }}>
            <BackButton
              style={{
                color: '#ffffff',
                border: '#14A800',
                background: '#14A800',
              }}
            >
              Go back Home
            </BackButton>
          </Link>
        </Center>
      </Tab>
    </Middle>
  );
}
