import React from 'react';

const Post = ({ post }) => {

  return (
    <>
      <div className="w-full mx-auto py-4 p-1.5">
        <div className="h-96 mb-2.5 flex items-center justify-center">
          <img src={post.url} alt={post.name} className="max-h-full border" />
        </div>

        <p className="text-center text-lg font-semibold">{post.name}</p>
      </div>
    </>
  );
};

export default Post;
