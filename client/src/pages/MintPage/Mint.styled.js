import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;
  height: calc(100vh - 100px); /* 브라우저 높이 - 400px */
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 16px;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export default {
  Wrapper,
  ImagePreview,
  Label,
  Input,
  Textarea,
};
