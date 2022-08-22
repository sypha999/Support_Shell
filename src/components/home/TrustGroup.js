import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px 30px;
  margin-top: 20px;
  height: 208px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;

export default function TrustGroup() {
  return (
    <Box>
      <Title>Trust Group</Title>
    </Box>
  );
}
