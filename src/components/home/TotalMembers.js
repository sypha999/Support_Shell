import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Box = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px 30px;
  height: 208px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
`;

// const data = {
//   labels: ["Male", "Female"],
//   datasets: [{
//     label: "Total Members",
//     data: [44, 36],
//     backgroundColor: [
//       "#000000",
//       "#BDBDBD"
//     ],
//     borderWidth: 1,
//     height: "208px"
//   }],
//   options: {
//     responsive: true,
//     maintainAspectRatio: false
//   }
// }

export default function TotalMembers() {
  return (
    <Box>
      <Title>Total Members</Title>
    </Box>
  );
}
