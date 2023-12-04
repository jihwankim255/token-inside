import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  height: 200px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

export default {
  Container,
  Form,
  Input,
  Textarea,
  Button,
};
