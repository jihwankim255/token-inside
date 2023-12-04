import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Styled from './Join.styled';

function JoinPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleInputChange = event => {
    const {name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleConfirmPasswordChange = event => {
    const confirmPassword = event.target.value;
    const password = event.target.form.password.value;
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleUsernameChange = event => {
    const nickname = event.target.value;
    if (!/^[A-Za-z0-9]{5,}$/.test(nickname)) {
      setUsernameError(
        'nickname must be at least 5 characters long and contain only letters and numbers',
      );
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = event => {
    const password = event.target.value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5500/user/join', formData)
      .then(response => {
        console.log(response.message, response.data); // Do something with the response
        alert('회원가입에 성공하였습니다!');
        navigate('/login');
      })
      .catch(error => {
        console.error(error);
        alert('회원가입에 실패하였습니다.', error);
      });
  };

  return (
    <Styled.FormWrapper>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Styled.InputLabel>ID</Styled.InputLabel>
          <Styled.Input
            type="text"
            name="nickname"
            placeholder="아이디을 입력하세요."
            value={formData.nickname}
            onChange={handleInputChange}
            required
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.InputLabel>Password</Styled.InputLabel>
          <Styled.Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.InputLabel>Confirm Password</Styled.InputLabel>
          <Styled.Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 똑같이 입력하세요."
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onKeyUp={handleConfirmPasswordChange} // 비밀번호 입력 후 일치 여부 확인
            width="600px"
            required
          />
          {passwordError && <Styled.ErrorMessage>{passwordError}</Styled.ErrorMessage>}
        </Styled.InputContainer>
        <Styled.SubmitButton type="submit" disabled={passwordError || usernameError}>
          Sign Up
        </Styled.SubmitButton>
      </Styled.FormContainer>
    </Styled.FormWrapper>
  );
}

export default JoinPage;
