import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../store';
import Styled from './Login.styled';

function LoginPage({isLoggedIn, setIsLoggedIn, user, setUser, address, setAddress}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nickname: '',
    password: '',
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
      .post('http://localhost:5500/user/login', formData, {withCredentials: true})
      .then(response => {
        console.log(response.data); // Do something with the response
        console.log(response.data.data.nickname); // Do something with the response
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', response.data.data.nickname);
        localStorage.setItem('address', response.data.data.address);
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
        setUser(localStorage.getItem('user'));
        setAddress(localStorage.getItem('address'));
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };
  // const handleOnClick = e => {
  //   dispatch(login('Lettie Estrada', 'aaaabbbbcccc111122223333')); // 완료 될때 redirect하도록 변경해야함
  //   navigate('/');
  // };

  return (
    <Styled.FormWrapper>
      <Styled.FormContainer onSubmit={handleSubmit}>
        <Styled.InputContainer>
          <Styled.InputLabel>ID</Styled.InputLabel>
          <Styled.Input
            type="text"
            name="nickname"
            placeholder="아이디를 입력하세요"
            value={formData.nickname}
            onChange={handleInputChange}
            width="600px"
            required
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.InputLabel>Password</Styled.InputLabel>
          <Styled.Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleInputChange}
            onKeyUp={handlePasswordChange}
            width="600px"
            required
          />
          {passwordError && <Styled.ErrorMessage>{passwordError}</Styled.ErrorMessage>}
        </Styled.InputContainer>
        <Styled.SubmitButton type="submit" disabled={passwordError || usernameError}>
          Log In
        </Styled.SubmitButton>
        {/* <button onClick={handleOnClick}>디버그 로그인</button> */}
      </Styled.FormContainer>
    </Styled.FormWrapper>
  );
}
export default LoginPage;
