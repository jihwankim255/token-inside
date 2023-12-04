import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store';
import axios from 'axios';
import {useState} from 'react';
import Styled from './Header.styled';

function Header({
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
  address,
  setAddress,
  searchInput,
  setSearchInput,
}) {
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  // const user = useSelector(state => state.user);
  // const address = useSelector(state => state.address);

  // const dispatch = useDispatch();
  const showState = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      console.log(cookies);
      if (cookies[i].trim().startsWith('connect.sid=')) {
        console.log('header get cookie: ', cookies[i].trim().substring(12));
      } else {
        console.log('no');
      }
    }
  };
  async function postFaucet() {
    axios
      .post('http://localhost:5500/user/faucet', null, {withCredentials: true})
      .then(response => {
        console.log(response.data); // Do something with the response
        alert(`ETH 받기 성공 ! 보유 ETH: ${response.data.data}`);
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('address');
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    setUser(localStorage.getItem('user'));
    setAddress(localStorage.getItem('address'));

    // DB의 세션에서 user 정보 삭제
    axios
      .get('http://localhost:5500/logout', {withCredentials: true})
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleChange = e => {
    e.preventDefault();
    setSearchInput(e.target.va);
  };

  return (
    <Styled.Head className="header">
      <Styled.Wrapper>
        <Styled.Column>
          <Link to="/">
            <Styled.LogoIcon>
              <FontAwesomeIcon
                icon={faCoins}
                color={props => props.theme.colors.primary}
                fontSize="45px"
              />
            </Styled.LogoIcon>
          </Link>
          <Link to="">
            <Styled.Logo onClick={showState}>TOKENINSIDE</Styled.Logo>
          </Link>

          <Styled.Search>
            <Styled.SearchBox>
              <Styled.SearchBar
                placeholder="Search post.."
                type="text"
                onChange={handleChange}
                value={searchInput}
              />
            </Styled.SearchBox>
            <Styled.SearchBox margin-right="10px">
              <FontAwesomeIcon icon={faSearch} fontSize="15px" margin-right="10px" color="black" />
            </Styled.SearchBox>
          </Styled.Search>
          <Styled.Nav>
            <Link to="/mint">
              <Styled.Menu>Mint NFT</Styled.Menu>
            </Link>

            <Link to="/write">
              <Styled.Menu>Write</Styled.Menu>
            </Link>

            <Styled.Menu onClick={() => postFaucet()}>ETH Faucet</Styled.Menu>
          </Styled.Nav>
        </Styled.Column>
        {isLoggedIn ? (
          <>
            계정: {user}
            <Styled.Info>주소: {address}</Styled.Info>
            <Styled.Btn>
              <Link to="/mypage">마이 페이지</Link>
            </Styled.Btn>
            <Styled.Btn onClick={() => handleLogout()}>로그아웃</Styled.Btn>
          </>
        ) : (
          <Styled.Column>
            <Styled.Btn>
              <Link to="/login">Login</Link>
            </Styled.Btn>
            <Styled.Btn>
              <Link to="/join">회원가입</Link>
            </Styled.Btn>
          </Styled.Column>
        )}
      </Styled.Wrapper>
    </Styled.Head>
  );
}

export default Header;
