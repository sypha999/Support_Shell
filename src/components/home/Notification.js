import React, { useState } from 'react';
import styled from 'styled-components';
import NoNotifications from '../../assets/NoNotifications.svg';

export default function Notification() {
  const [notifications] = useState([]);

  const Box = styled.div`
    background: #ffffff;
    border-radius: 4px;
    height: 436px;
    width: 100%;
    padding: 20px 30px;
    ${!notifications.length
      ? `
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      `
      : null}
  `;

  const Title = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  `;

  const Paragraph = styled.p``;

  return (
    <Box>
      {!notifications.length ? (
        <div>
          <img src={NoNotifications} alt="" />
          <Title>No notifications yet</Title>
          <Paragraph>
            You have currently no notification. We'll notify you when something
            new arrives!
          </Paragraph>
        </div>
      ) : null}
    </Box>
  );
}
