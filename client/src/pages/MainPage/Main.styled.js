import styled from 'styled-components';

const WriteBox = styled.div`
  margin-top: 50px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 40px;
  :span(:first-child) {
    font-size: 25px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.div`
  font-size: 60px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 600;
`;

const WriteBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  font-size: 20px;
  color: white;
  border-radius: 9px;
  background: ${props => props.theme.colors.primary2};
  :hover {
    cursor: pointer;
  }
`;
const Post = styled.div`
  border: 1px solid skyblue;
  margin: 15px;
  padding: 8px;
  :hover {
    cursor: pointer;
  }
`;

export default {
  WriteBox,
  Container,
  ListTitle,
  WriteBtn,
  Post,
};
