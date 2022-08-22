import React, { useState } from 'react';
import { PageTitle, SpaceBetween } from '../../../utils/common';
import Button from '../../../components/common/Button';
import Modal from '../../../components/common/Modal';
import CreateTrustGroup from './CreateTrustGroup';
import styled from 'styled-components';
import { RiHistoryLine } from 'react-icons/ri';
import User from '../../../assets/Group.svg';
import ChatBubble from './ChatBubble';

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  padding-bottom: 30px;
  margin-top: 23px;
`;

const DiscussionArea = styled.div`
  width: inherit;
  background: rgba(33, 51, 79, 0.1);
  padding: 1px;
`;

const DiscussionHeader = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  padding: 0 14px;
`;

const DiscussionBody = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Discussions = styled.div`
  padding: 20px;
  height: 92%;
  overflow-y: scroll;
`;

const Sidebar = styled.div`
  width: 259px;
  background: #21334f;
  padding: 7px;
  min-height: 100%;
`;

const SidebarTitle = styled.h1`
  font-size: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

const SidebarMenu = styled.div`
  color: #ffffff;
  background-color: #031839;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 4px;
`;

const SidebarAvatar = styled.img`
  border-radius: 50%;
  background: #ffffff;
  margin-right: 6px;
  height: 24px;
  width: 24px;
  padding: 4px;
`;

const HeaderAvatar = styled(SidebarAvatar)`
  height: 40px;
  width: 40px;
  padding: 8px;
  background: #dadada;
`;

const MenuLabel = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLabel = styled(MenuLabel)``;

const MenuTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

const HeaderTitle = styled(MenuTitle)`
  font-size: 18px;
  font-weight: bold;
`;

const MenuSubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`;
const HeaderSubTitle = styled(MenuSubTitle)`
  font-size: 14px;
  font-weight: normal;
`;

export default function TrustGroupDiscussion() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div style={{ height: '100%' }}>
      <SpaceBetween>
        <PageTitle>Trust Group</PageTitle>
        <Button
          style={{ width: '136px', height: '38px' }}
          onClick={() => toggleModal()}
        >
          Create Group
        </Button>
      </SpaceBetween>
      <ContentArea>
        <Sidebar>
          <SidebarTitle>
            <RiHistoryLine style={{ marginRight: '7px' }} />
            Recent
          </SidebarTitle>
          <SidebarMenu>
            <MenuLabel>
              <SidebarAvatar src={User} alt="User Avatar" />
              <div>
                <MenuTitle>All about Technical Skills</MenuTitle>
                <MenuSubTitle>Created by Adekunle</MenuSubTitle>
              </div>
            </MenuLabel>
            <MenuSubTitle>05/12</MenuSubTitle>
          </SidebarMenu>
        </Sidebar>
        <DiscussionArea>
          <DiscussionHeader>
            <HeaderLabel>
              <HeaderAvatar src={User} alt="User Avatar" />
              <div>
                <HeaderTitle>All about Technical Skills</HeaderTitle>
                <HeaderSubTitle>65 Members, 10 Online</HeaderSubTitle>
              </div>
            </HeaderLabel>
          </DiscussionHeader>
          <DiscussionBody>
            <Discussions>
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
              <ChatBubble
                username="Moses Sunday"
                message="Hello Chinedu, your message is received, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ac quisque quisque rutrum condimentum"
                avatar="https://picsum.photos/100"
                timeStamp="02:05PM"
              />
            </Discussions>
          </DiscussionBody>
        </DiscussionArea>
      </ContentArea>
      <Modal
        title="Create a Trust Group"
        isOpen={showModal}
        closeModal={toggleModal}
      >
        <CreateTrustGroup />
      </Modal>
    </div>
  );
}
