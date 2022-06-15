import useApi from 'useApi';
import { Spin } from 'components';
import {  useState } from 'react';
import VerticlePosts from './VerticlePosts';
import HorizontalPosts from './HorizontalPosts';

const Posts = () => {
  const [pageNumber,setPageNumber]=useState(1)
  const [isPostClicked,setIsPostClicked]=useState(false)

  const {data,error,loading}=useApi(pageNumber)
   
  return (
    <Spin spinning={!data}>
      <VerticlePosts data={data}  isPostClicked={isPostClicked}  loading={loading}  setPageNumber={setPageNumber}  setIsPostClicked={setIsPostClicked}/>
     {isPostClicked!==false && <HorizontalPosts data={data} isPostClicked={isPostClicked} setIsPostClicked={setIsPostClicked}/>}
    </Spin>
  );
};

export default Posts;
