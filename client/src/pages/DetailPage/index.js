import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import Styled from './Detail.styled';

function DetailPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({post: {}});
  const {id} = useParams();

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL + `/post/detail/${id}`).then(response => {
      setData(response.data);
    });
  }, []);

  // console.log('data', data.post);
  return (
    <Styled.Container>
      <Styled.Title>게시물 조회 페이지</Styled.Title>
      <Styled.PostContainer>
        <Styled.PostHeader>
          <Styled.PostNumber>번호 : {id}</Styled.PostNumber>
        </Styled.PostHeader>
        <Styled.PostHeader>
          <Styled.PostAuthor>작성자 : {data.post.user_id}</Styled.PostAuthor>
        </Styled.PostHeader>
        <Styled.PostHeader>
          <Styled.PostDate>생성일 : {data.post.created_at}</Styled.PostDate>
        </Styled.PostHeader>
        <Styled.PostHeader>
          <Styled.PostNumber>타이틀 : {data.post.title}</Styled.PostNumber>
        </Styled.PostHeader>
        <Styled.PostHeader>
          <Styled.PostContent>본문 : {data.post.content}</Styled.PostContent>
        </Styled.PostHeader>
      </Styled.PostContainer>
      <Styled.Button onClick={() => navigate('/')}>게시글 목록</Styled.Button>
    </Styled.Container>
  );
}

export default DetailPage;
