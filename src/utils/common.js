import styled from 'styled-components';

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const AuthFormArea = styled.div`
  padding: 46px 90px;
  background-color: #ffffff;
  max-width: 100%;
  width: 700px;
`;

const BackButton = styled.div`
  width: 163px;
  height: 44px;
  background: rgba(20, 168, 0, 0.05);
  border-radius: 4px;
  font-size: 16px;
  color: #14a800;
  font-weight: 600;
  margin-top: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`;

const MarginStyle = styled.div`
  margin-top: 5%;
`;

const WelcomeText = styled.div`
  text-align: center;
  margin-top: 5%;

  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #21334f;
`;
const Heading = styled.div`
  text-align: center;
  font-family: Mulish;
  font-weight: bold;
  font-size: 32px;
  color: #21334f;
`;
const Paragraph = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #979797;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
`;

const InputWidth = styled.div`
  width: 45%;
`;
const Middle = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 45vw;
  margin: auto;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;
const Tab = styled.div`
  height: Auto;
  width: 45vw;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  background-color: white;
`;
const Div = styled.div``;

const PageTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenuItem = styled.a`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;
const DropdownPlaceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownCaret = styled.div`
  margin-left: 5px;
`;

const DropDownMenu = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  float: right;
  width: 100%;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
`;
export {
  Center,
  Anchor,
  BackButton,
  Title,
  AuthFormArea,
  MarginStyle,
  WelcomeText,
  Heading,
  Paragraph,
  Container,
  InputWidth,
  Tab,
  Middle,
  Div,
  PageTitle,
  SpaceBetween,
  DropdownCaret,
  DropdownMenuItem,
  DropdownPlaceHolder,
  DropDownMenu
};
