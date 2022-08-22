import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BubbleArea = styled.div`
  max-width: 452px;
  border-radius: 10px;
  background: #ffffff;
  margin: 5px 0;
`;
const BubbleHeader = styled.div`
  padding: 4px 10px;
  display: flex;
  justify-content: flex-end;
`;

const BubbleFooter = styled.div`
  padding: 4px 10px;
  display: flex;
  justify-content: flex-end;
`;

const Username = styled.p`
  font-size: 10px;
  right: 0;
  color: #000000;
  margin: 0;
`;

const TimeStamp = styled.p`
  font-size: 10px;
  right: 0;
  color: #bdbdbd;
  margin: 0;
`;

const BubbleBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
`;

const BubbleAvatar = styled.img`
  border-radius: 50%;
  margin-right: 6px;
  height: 24px;
  width: 24px;
`;

const Message = styled.p`
  font-size: 12px;
  color: #000000;
  margin: 0;
`;

export default function ChatBubble({ username, avatar, message, timeStamp }) {
  return (
    <BubbleArea>
      <BubbleHeader>
        <Username>{username}</Username>
      </BubbleHeader>
      <BubbleBody>
        {avatar && <BubbleAvatar src={avatar} alt={username} />}
        <Message>{message}</Message>
      </BubbleBody>
      <BubbleFooter>
        <TimeStamp>{timeStamp}</TimeStamp>
      </BubbleFooter>
    </BubbleArea>
  );
}

ChatBubble.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  message: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};
