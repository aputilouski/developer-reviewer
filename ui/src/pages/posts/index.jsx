import api from 'api';
import React, { useEffect, useState } from 'react';

import { Spin } from 'components';
import Post from './Post';



import InfiniteScroll from 'react-infinite-scroll-component';

const Posts = () => {
  const [resData, setData] = useState([]);
  const [start, setStart] = useState(1);
  const count = 8;


  const loadFirstData = () => {
    api.getPosts(start, count).then(response => {
      console.log(response);
      setData(response.rows);
    });
  };
  const fetchMoreData = () => {
    api.getPosts(start + 1, count).then(response => {
      setTimeout(() => {
        setData([...resData, ...response.rows]);
      }, 1500);
      setStart(start + 1);
      // console.log(response.data.results)
    });
  };
  useEffect(() => {
    loadFirstData();
  }, []);
  return (
    <>
      <Spin spinning={!resData?.length}>
        <div className="flex flex-col gap-3">
          <InfiniteScroll dataLength={resData.length} next={fetchMoreData} hasMore={true} loader={<Spin spinning="true"></Spin>}>
            {resData?.map(post => (
              <Post key={post.id} post={post} resData={resData} />
              
            ))}
          </InfiniteScroll>
        </div>
      </Spin>
   
    </>
  );
};

export default Posts;
