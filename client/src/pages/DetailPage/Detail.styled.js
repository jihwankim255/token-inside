import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px); /* 브라우저 높이 - 300px */
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const PostContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 800px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const PostNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const PostAuthor = styled.span`
  font-size: 16px;
  color: #666;
  font-weight: bold;
`;

const PostDate = styled.span`
  font-size: 16px;
  color: #666;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  max-width: 14em;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default {
  Container,
  Title,
  PostContainer,
  PostHeader,
  PostNumber,
  PostAuthor,
  PostDate,
  PostContent,
  Button,
};
