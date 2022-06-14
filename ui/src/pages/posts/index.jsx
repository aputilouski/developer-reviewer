import api from 'api';
import useSWR from 'swr';
import { Spin } from 'components';
import Post from './Post';

const Posts = () => {
  const { data } = useSWR('posts', api.getPosts);

  return (
    <Spin spinning={!data}>
      <div className="flex flex-col gap-3 relative">
        {data?.rows.splice(0, 8).map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Spin>
  );
};

export default Posts;
