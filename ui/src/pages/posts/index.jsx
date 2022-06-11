import api from 'api';
import useSWR from 'swr';
import { Spin } from 'components';
import Post from './Post';

const Posts = () => {
  const { data } = useSWR('posts', api.getPosts);

  return (
    <Spin spinning={!data}>
      {data?.rows.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Spin>
  );
};

export default Posts;
