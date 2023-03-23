import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

// import {HelmetProvider, Helmet} from 'react-helmet-async';
import {GlobalStyles, lightTheme} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from './store';

// Pages
import MainPage from './pages/MainPage';
import MarketPage from './pages/MarketPage';
import MyPage from './pages/MyPage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import JoinPage from './pages/JoinPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import MintPage from './pages/MintPage';
import PrivateRoute from './pages/PrivateRoute';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/market" element={<MintPage />} />
        <Route path="/mypage" element={<PrivateRoute element={<MyPage />} />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
