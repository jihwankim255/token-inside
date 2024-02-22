import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import {Col} from '../../styles';
import {Link, useNavigate} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {data} from '../../data';
import axios from 'axios';
import Styled from './Main.styled';

function MainPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [post, SetPost] = useState([]);
  const [postLoading, SetPostLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    // if (post.length < 200) {
    //   setOffset(offset + 1);
    //   SetPost([...post, ...data.slice(offset * 20, (offset + 1) * 20)]);
    // } else {
    //   setHasMore(false);
    // }
    if (!postLoading) {
      SetPostLoading(true);
      setTimeout(() => {
        axios
          .get(process.env.REACT_APP_BASE_URL, {params: {page: page}})
          .then(response => {
            SetPost([...post, ...response.data.data]);

            if (response.data.data.length === 0) {
              setHasMore(false);
            } else {
              setPage(page + 1);
            }
            console.log('main_get: ', response.data.data); // Do something with the response
          })
          .catch(error => {
            console.error('메인 에러: ', error);
            setHasMore(false);
          });
      }, 2000);
      SetPostLoading(false);
    }
  };
  const handleClick = id => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL, {params: {page: page}})
      .then(response => {
        SetPost([...post, ...response.data.data]);
        setPage(page + 1);
        console.log('main_get: ', response.data.data); // Do something with the response
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const test = () => {
    console.log('post: ', post);
  };

  return (
    <InfiniteScroll
      dataLength={post.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>로딩중~</p>}
      endMessage={<p>끝났습니다</p>}
      height={940}
    >
      <Styled.Container className="aaabbbccc">
        <Styled.WriteBox>
          {/* <Link to="/write"> */}
          <Styled.WriteBtn onClick={() => test()}>Write posts, get incentive!</Styled.WriteBtn>
          {/* </Link> */}
        </Styled.WriteBox>

        {post &&
          post.map(item => {
            return (
              <Styled.Post key={item.id} onClick={() => handleClick(item.id)}>
                #{item.id} {item.created_at.slice(0, 16)}
                <div>작성자: {item.user_id}</div>
                <div>제목: {item.title}</div>
                <div>내용: {item.content}</div>
              </Styled.Post>
            );
          })}
      </Styled.Container>
    </InfiniteScroll>
  );
}

export default MainPage;
