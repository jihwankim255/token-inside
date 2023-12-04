import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Styled from './My.styled';

function MyPage() {
  const [activeTab, setActiveTab] = useState('nft');
  const [isLoading, setIsLoading] = useState(false);
  const [myToken, setMyToken] = useState(0);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const [nftInfo, setNftInfo] = useState([]);
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    axios
      .get('http://localhost:5500/user/mypage', {withCredentials: true})
      .then(response => {
        console.log('data: ', response.data);
        console.log('myToken amount: ', response.data.data.user.token_amount);
        setMyToken(response.data.data.user.token_amount);
        console.log('posts: ', response.data.data.posts);
        setPosts([...response.data.data.posts]);
        setNftInfo([...response.data.data.nfts]);
        setUser(response.data.data.user);
        console.log(response.data.data.user);
      })
      .then(() => console.log('NFT', user))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:5500/user/transfer',
        {account, amount},
        {
          withCredentials: true,
        },
      )
      .then(response => {
        setMyToken(response.data.data);
        setAmount('');
        setAccount('');

        alert('계좌에 토큰 전송이 성공했습니다.');
      });
  };

  return (
    <Styled.Container>
      <Styled.TopSection>
        {isLoading ? (
          <div>loading....</div>
        ) : (
          <Styled.TopInfo>
            <Styled.InfoItem>
              <div style={{marginBottom: '30px', fontSize: '40px'}}>닉네임</div>
              <div>{user.nickname}</div>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <div style={{marginBottom: '30px', fontSize: '40px'}}>지갑 주소</div>
              <div>{user.address}</div>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <div style={{marginBottom: '30px', fontSize: '40px'}}>보유 TKI</div>
              <div>{myToken}</div>
            </Styled.InfoItem>
          </Styled.TopInfo>
        )}
      </Styled.TopSection>
      <Styled.MiddleSection>
        <Styled.TabContainer>
          <Styled.Tab active={activeTab === 'nft'} onClick={() => handleTabClick('nft')}>
            나의 NFT
          </Styled.Tab>
          <Styled.Tab active={activeTab === 'posts'} onClick={() => handleTabClick('posts')}>
            내가 쓴 글
          </Styled.Tab>
          <Styled.Tab active={activeTab === 'deposit'} onClick={() => handleTabClick('deposit')}>
            송금하기
          </Styled.Tab>
        </Styled.TabContainer>
        {activeTab === 'nft' && <div>{/* code for my NFT tab */}</div>}
        {activeTab === 'posts' && <div>{/* code for my posts tab */}</div>}
        {activeTab === 'deposit' && <div>{/* code for deposit/withdrawal tab */}</div>}
      </Styled.MiddleSection>
      <Styled.BottomSection>
        {isLoading ? (
          <div>Loading...</div>
        ) : activeTab == 'nft' ? (
          <Styled.NftContainer>
            <Styled.CardContainer>
              {nftInfo?.map((item, idx) => (
                <Styled.Card>
                  <Styled.CardImage src={item.tokenurl} />
                  <Styled.CardTitle>{item.name}</Styled.CardTitle>
                  <Styled.CardDescription>{item.description}</Styled.CardDescription>
                </Styled.Card>
              ))}
            </Styled.CardContainer>
          </Styled.NftContainer>
        ) : activeTab == 'posts' ? (
          <Styled.PostContainer>
            {posts &&
              posts.map((item, idx) => (
                <Link to={`/detail/${item.id}`}>
                  <Styled.PostMypage key={item.id}>
                    #{item.id} {item.created_at.slice(0, 16)}
                    <div>작성자: {item.user_id}</div>
                    <div>제목: {item.title}</div>
                    <div>내용: {item.content}</div>
                  </Styled.PostMypage>
                </Link>
              ))}
          </Styled.PostContainer>
        ) : activeTab == 'deposit' ? (
          <Styled.DepositContainer>
            <div style={{fontSize: '35px'}}>전송 가능 토큰 : {myToken}</div>
            <Styled.Form onSubmit={handleSubmit}>
              <Styled.Input
                type="text"
                placeholder="보내실 금액"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <Styled.Input
                type="text"
                placeholder="보내실 주소"
                value={account}
                onChange={e => setAccount(e.target.value)}
              />

              <Styled.Button type="submit">전송</Styled.Button>
            </Styled.Form>
          </Styled.DepositContainer>
        ) : null}
      </Styled.BottomSection>
    </Styled.Container>
  );
}

export default MyPage;
