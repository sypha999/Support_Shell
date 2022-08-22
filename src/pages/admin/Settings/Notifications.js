import React, { useState } from 'react';
import { Container, Div, Paragraph, Title } from '../../../utils/common';
import ToggleButton from '../../../components/common/ToggleButton';
import styled from 'styled-components';

const Hr = styled.hr`
  border: rgba(144, 144, 144, 0.2);
`;

const ToggleText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  font-size: 14px;
  margin-left: 5%;
  padding-top: 4%;
`;

export default function Notifications() {
  const [pushComment, setPushComment] = useState(false);
  const [emailComment, setEmailComment] = useState(false);
  const [pushMentions, setPushMentions] = useState(false);
  const [emailMentions, setEmailMentions] = useState(false);
  const [pushReminders, setPushReminders] = useState(false);
  const [emailReminders, setEmailReminders] = useState(false);
  return (
    <Div style={{ width: '100%' }}>
      <Title style={{ textAlign: 'left' }}>Notifications</Title>
      <Container style={{ width: '65%' }}>
        <Paragraph
          style={{ color: '#000000', fontWeight: 'bold', fontSize: '14px' }}
        >
          {' '}
          Comments
        </Paragraph>
        <Container>
          {' '}
          <ToggleButton
            selected={pushComment}
            toggleSelected={() => {
              setPushComment(!pushComment);
            }}
            buttonColor="#000000"
          />{' '}
          <ToggleText style={{ paddingLeft: '2.5px' }}>Push</ToggleText>
        </Container>
      </Container>
      <Container style={{ width: '65%', margin: '0%' }}>
        <Paragraph style={{ fontSize: '14px' }}>
          These are notifications for mentions and reply to your posts.
        </Paragraph>
        <Container>
          {' '}
          <ToggleButton
            selected={emailComment}
            toggleSelected={() => {
              setEmailComment(!emailComment);
            }}
            buttonColor="#DADADA"
          />{' '}
          <ToggleText>Email</ToggleText>
        </Container>
      </Container>
      <Hr />
      <Container style={{ width: '65%' }}>
        <Paragraph
          style={{ color: '#000000', fontWeight: 'bold', fontSize: '14px' }}
        >
          {' '}
          Mentions
        </Paragraph>
        <Container>
          {' '}
          <ToggleButton
            selected={pushMentions}
            toggleSelected={() => {
              setPushMentions(!pushMentions);
            }}
            buttonColor="#000000"
          />{' '}
          <ToggleText style={{ paddingLeft: '2.5px' }}>Push</ToggleText>
        </Container>
      </Container>
      <Container style={{ width: '65%' }}>
        <Paragraph style={{ fontSize: '14px' }}>
          These are notifications when someone mentions you in a group or
          individual.
        </Paragraph>
        <Container>
          {' '}
          <ToggleButton
            selected={emailMentions}
            toggleSelected={() => {
              setEmailMentions(!emailMentions);
            }}
            buttonColor="#DADADA"
          />{' '}
          <ToggleText>Email</ToggleText>
        </Container>
      </Container>

      <Hr />
      <Container style={{ width: '65%' }}>
        <Paragraph
          style={{ color: '#000000', fontWeight: 'bold', fontSize: '14px' }}
        >
          {' '}
          Reminders
        </Paragraph>
        <Container>
          {' '}
          <ToggleButton
            selected={pushReminders}
            toggleSelected={() => {
              setPushReminders(!pushReminders);
            }}
            buttonColor="#000000"
          />{' '}
          <ToggleText style={{ paddingLeft: '2.5px' }}>Push</ToggleText>
        </Container>
      </Container>
      <Container style={{ width: '65%' }}>
        <Paragraph style={{ fontSize: '14px' }}>
          These are notifications to remind you of updates you might have
          missed.
        </Paragraph>
        <Container>
          <ToggleButton
            selected={emailReminders}
            toggleSelected={() => {
              setEmailReminders(!emailReminders);
            }}
            buttonColor="#DADADA"
          />
          <ToggleText>Email</ToggleText>
        </Container>
      </Container>
    </Div>
  );
}