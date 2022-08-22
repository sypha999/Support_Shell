import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 0 16px 0;
`;

const ViewAll = styled.a`
  width: 122px;
  height: 35px;
  background: rgba(20, 168, 0, 0.05);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #14a800;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  &:hover {
    color: #14a800;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const TR = styled.tr`
  &:nth-child(2n + 1) {
    background: #ffffff;
  }
`;

const THead = styled.thead`
  background: #e5e5e5;
  height: 48px;
  ${TR} {
    background: #e5e5e5;
  }
`;

const TH = styled.td`
  text-align: center;
  border: 1px solid #dadada;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
`;

const TBody = styled.tbody``;

const TD = styled.td`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  background: rgba(246, 246, 246, 0.49);
  border: 1px solid #dadada;
  height: 40px;
  text-align: center;
`;

export default function RegisteredMembers() {
  return (
    <div>
      <Top>
        <Title>Registered Members</Title>
        <ViewAll href="/members">View All Members</ViewAll>
      </Top>
      <Table>
        <THead>
          <TR>
            <TH>SN</TH>
            <TH>Full Name</TH>
            <TH>Address</TH>
            <TH>Email</TH>
            <TH>Phone Number</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>1</TD>
            <TD>Chiebuka Ikenna</TD>
            <TD>10, Ayo Street, Ikoyi, Lagos</TD>
            <TD>odinakachukwu2@gmail.com</TD>
            <TD>07034567890</TD>
          </TR>
          <TR>
            <TD>2</TD>
            <TD>Chiebuka Ikenna</TD>
            <TD>10, Ayo Street, Ikoyi, Lagos</TD>
            <TD>odinakachukwu2@gmail.com</TD>
            <TD>07034567890</TD>
          </TR>
          <TR>
            <TD>3</TD>
            <TD>Chiebuka Ikenna</TD>
            <TD>10, Ayo Street, Ikoyi, Lagos</TD>
            <TD>odinakachukwu2@gmail.com</TD>
            <TD>07034567890</TD>
          </TR>
          <TR>
            <TD>4</TD>
            <TD>Chiebuka Ikenna</TD>
            <TD>10, Ayo Street, Ikoyi, Lagos</TD>
            <TD>odinakachukwu2@gmail.com</TD>
            <TD>07034567890</TD>
          </TR>
          <TR>
            <TD>5</TD>
            <TD>Chiebuka Ikenna</TD>
            <TD>10, Ayo Street, Ikoyi, Lagos</TD>
            <TD>odinakachukwu2@gmail.com</TD>
            <TD>07034567890</TD>
          </TR>
        </TBody>
      </Table>
    </div>
  );
}
