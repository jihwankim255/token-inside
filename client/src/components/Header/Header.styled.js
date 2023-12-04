import styled from 'styled-components';

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
  width: 400px;
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

  :hover {
    cursor: pointer;
  }
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
const Info = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 10em;
`;

export default {
  Head,
  Wrapper,
  Column,
  Logo,
  LogoIcon,
  Icon,
  Search,
  SearchBox,
  Nav,
  Menu,
  SearchBar,
  Btn,
  Info,
};
