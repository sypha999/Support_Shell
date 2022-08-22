import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/common/Button';
import Modal from '../../../components/common/Modal';
import { Center, PageTitle, SpaceBetween } from '../../../utils/common';
import CreateTrustGroup from './CreateTrustGroup';
import TrustGroupCard from './TrustGroupCard';

const PageArea = styled.div`
  margin: 20px 0 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShowMore = styled(Button)`
  border: 1px solid #14a800;
  width: 176px;
  height: 50px;
  color: #14a800;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
`;

export default function TrustGroup() {
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <div>
      <SpaceBetween>
        <PageTitle>Trust Groups</PageTitle>
        <Button
          style={{ width: '136px', height: '38px' }}
          onClick={() => toggleModal()}
        >
          Create Group
        </Button>
      </SpaceBetween>
      <PageArea>
        <TrustGroupCard
          title="All about technical skills"
          date="04/12/2024"
          time="02:45PM"
          createdBy="Adekunle"
          members={[
            'https://picsum.photos/70',
            'https://picsum.photos/80',
            'https://picsum.photos/90',
            'https://picsum.photos/100',
          ]}
          id={'1'}
        />
        <TrustGroupCard
          title="All about technical skills"
          date="04/12/2024"
          time="02:45PM"
          createdBy="Adekunle"
          members={[
            'https://picsum.photos/70',
            'https://picsum.photos/80',
            'https://picsum.photos/90',
            'https://picsum.photos/100',
          ]}
          id={'1'}
        />
        <TrustGroupCard
          title="All about technical skills"
          date="04/12/2024"
          time="02:45PM"
          createdBy="Adekunle"
          members={[
            'https://picsum.photos/70',
            'https://picsum.photos/80',
            'https://picsum.photos/90',
            'https://picsum.photos/100',
          ]}
          id={'1'}
        />
        <TrustGroupCard
          title="All about technical skills"
          date="04/12/2024"
          time="02:45PM"
          createdBy="Adekunle"
          members={[
            'https://picsum.photos/70',
            'https://picsum.photos/80',
            'https://picsum.photos/90',
            'https://picsum.photos/100',
          ]}
          id={'1'}
        />
      </PageArea>
      <Center>
        <ShowMore onClick={() => toggleShowMore()}>
          {showMore ? 'See less' : 'See More Groups'}
        </ShowMore>
      </Center>
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
