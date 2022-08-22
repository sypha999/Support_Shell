import React, { useState } from 'react';
import styled from 'styled-components';
import { Anchor, PageTitle, SpaceBetween } from '../../../utils/common';
import PropTypes from 'prop-types';
import { GoKebabVertical } from 'react-icons/go';
import Button from '../../../components/common/Button';
import { AiFillEdit } from 'react-icons/ai';
import { BsDashLg } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const CardArea = styled.div`
  height: 330px;
  min-width: 49%;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 15px;
`;
const CardHeader = styled.div`
  padding: 10px 20px 0;
  color: #1d2126;
  border-bottom: 1px solid #e5e5e5;
`;

const CardBody = styled.div`
  height: 274px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeStamp = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  display: flex;
`;

const Created = styled.p`
  font-size: 12px;
  font-weight: 600;
`;

const Discussing = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  font-size: 12px;
  color: #1d2126;
`;

const SecondaryButton = styled(Button)`
  width: 111px;
  height: 35px;
  font-size: 12px;
  color: #14a800;
  background-color: rgba(20, 168, 0, 0.05);
`;

const Stack = styled.div`
  overflow: hidden;
  margin-right: 6px;
  img {
    background: #c4c4c4;
    border: 2px solid #ffffff;
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 50%;
  }
  .stack-image {
    margin-left: -18px;
    postion: absolute;
  }
`;

const DropDown = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  float: right;
`;

const DropdownMenuItem = styled.a`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  margin-bottom: 10px;
  &:hover {
    color: #000000;
  }
`;

const DropdownMenuItemLabel = styled.div`
  margin-left: 10px;
`;

export default function TrustGroupCard({
  title,
  date,
  time,
  createdBy,
  id,
  members,
}) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const DropdownArea = styled.div`
    display: ${showOptions ? 'block' : 'none'};
    position: absolute;
    background-color: #ffffff;
    min-width: 215px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 8px;
    padding: 13px 24px;
    right: 0;
  `;

  return (
    <CardArea>
      <CardHeader>
        <SpaceBetween>
          <PageTitle>{title}</PageTitle>
          <DropDown>
            <GoKebabVertical onClick={() => toggleOptions()} />
            <DropdownArea>
              <DropdownMenuItem href={`trust-group/${id}/edit`}>
                <AiFillEdit />
                <DropdownMenuItemLabel>Edit Trust Group</DropdownMenuItemLabel>
              </DropdownMenuItem>
              <DropdownMenuItem href={`trust-group/${id}/remove`}>
                <BsDashLg />
                <DropdownMenuItemLabel>Remove member</DropdownMenuItemLabel>
              </DropdownMenuItem>
              <DropdownMenuItem href={`trust-group/${id}/delete`}>
                <MdDelete />
                <DropdownMenuItemLabel>Delete</DropdownMenuItemLabel>
              </DropdownMenuItem>
            </DropdownArea>
          </DropDown>
        </SpaceBetween>
      </CardHeader>
      <CardBody>
        <div>
          <TimeStamp>
            <p style={{ marginRight: '10px' }}>{date}</p>
            <p>{time}</p>
          </TimeStamp>
          <Created>Created by {createdBy}</Created>
        </div>
        <div>
          <SpaceBetween>
            <Discussing>
              <Stack>
                {members.map((member, index) => (
                  <img
                    src={member}
                    alt={member}
                    key={index}
                    className={`${index !== 0 ? 'stack-image' : ''}`}
                  />
                ))}
              </Stack>
              <Count>{`${members.length} member${
                members.length > 1 ? 's' : ''
              } disccussing`}</Count>
            </Discussing>
            <Anchor href={`trust-group/${id}`}>
              <SecondaryButton>View Discussion</SecondaryButton>
            </Anchor>
          </SpaceBetween>
        </div>
      </CardBody>
    </CardArea>
  );
}

TrustGroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};
