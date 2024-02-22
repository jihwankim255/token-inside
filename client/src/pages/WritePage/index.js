import React, {useState} from 'react';
import axios from 'axios';
import Styled from './Write.styled';

function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('title, content', title, content);
      await axios.post(
        process.env.REACT_APP_BASE_URL + '/post/register',
        {title, content},
        {withCredentials: true},
      );
      alert('게시물이 작성되었습니다.');
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
      alert('게시물 작성에 실패했습니다.');
    }
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Styled.Textarea
          placeholder="내용"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Styled.Button type="submit">작성</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export default WritePage;
