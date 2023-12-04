import styled from 'styled-components';
import MainStyled from '../MainPage/Main.styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  padding: 30px;
  height: 300px;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 20px;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => (props.active ? '#0070f3' : '#666')};
  border-bottom: ${props => (props.active ? '2px solid #0070f3' : '2px solid transparent')};
  font-size: 40px;
  font-weight: 600;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  padding: 30px;
`;

const PostMypage = styled(MainStyled.Post)`
  font-size: 30px;
  font-weight: 600;
  border: 1px solid black;
`;

const NftContainer = styled.div`
  display: flex;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 600px;
  width: 800px;
`;

const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 20px 20px;
  border: 3px solid black;
  border-radius: 5px;
  padding: 30px 30px;
`;

const CardContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;

  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Input = styled.input`
  margin-top: 20px;
  width: 600px;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
  border: 3px solid black;
`;

const Button = styled.button`
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  height: 50px;
  font-size: 25px;
`;

export default {
  Container,
  TopSection,
  TopInfo,
  InfoItem,
  MiddleSection,
  TabContainer,
  Tab,
  BottomSection,
  PostMypage,
  NftContainer,
  PostContainer,
  DepositContainer,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  Form,
  Input,
  Button,
};
