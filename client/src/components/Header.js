import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoins, faSearch} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store';
const Head = styled.div`
  z-index: 5;
  width: 100%;
  padding: 0px 40px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 25px;
  margin-left: 15px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

const LogoIcon = styled(Logo)`
  margin-left: 0px;
`;
const Icon = styled.span`
  margin-left: 25px;
  font-size: 25px;
  :hover {
    cursor: pointer;
  }
`;
const Search = styled.div`
  background-color: #eae9ed;
  display: flex;
  border-radius: 10px;
  margin-left: 25px;
  width: 500px;
  height: 30px;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const Nav = styled.nav``;

const Menu = styled(Icon)`
  font-size: 15px;
  font-weight: 600;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 5px 10px;
  ::placeholder {
    align-content: center;
    padding-left: 10px;
    font-size: 13px;
  }
`;

const Btn = styled.div`
  margin-right: 10px;
  background-color: #87ceeb;
  font-weight: 600;
  font-size: 15px;
  color: white;
  padding: 15px 15px;
  border-radius: 9px;
  :hover {
    cursor: pointer;
  }
`;
function Header() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const user = useSelector(state => state.user);
  const address = useSelector(state => state.address);
  const dispatch = useDispatch();
  const showState = () => {
    console.log('header isLoggedIn: ', isLoggedIn);
  };
  return (
    <Head className="header">
      <Wrapper>
        <Column>
          <Link to="/">
            <LogoIcon>
              <FontAwesomeIcon
                icon={faCoins}
                color={props => props.theme.colors.primary}
                fontSize="45px"
              />
            </LogoIcon>
          </Link>
          <Link to="">
            <Logo onClick={showState}>TOKENINSIDE</Logo>
          </Link>

          <Search>
            <SearchBox>
              <SearchBar placeholder="Search post.." />
            </SearchBox>
            <SearchBox margin-right="10px">
              <FontAwesomeIcon icon={faSearch} fontSize="15px" margin-right="10px" color="black" />
            </SearchBox>
          </Search>
          <Nav>
            <Link to="/market">
              <Menu>Market</Menu>
            </Link>

            <Link to="/write">
              <Menu>Write</Menu>
            </Link>
            <Link to="/write">
              <Menu>ETH Faucet</Menu>
            </Link>
          </Nav>
        </Column>
        {isLoggedIn ? (
          <>
            {user} {address}
            <Btn>
              <Link to="/mypage">마이 페이지</Link>
            </Btn>
            <Btn onClick={() => dispatch(logout())}>로그아웃</Btn>
          </>
        ) : (
          <Column>
            <Btn>
              <Link to="/login">Login</Link>
            </Btn>
            <Btn>
              <Link to="/join">회원가입</Link>
            </Btn>
          </Column>
        )}
      </Wrapper>
    </Head>
  );
}

export default Header;
