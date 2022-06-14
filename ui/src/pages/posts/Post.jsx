import React, { useState } from 'react';
import Modal from './Modal';

const Post = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Modal post={post} setIsOpen={setIsOpen} />
      ) : (
        <div className="max-w-md w-full mx-auto py-4 border p-1.5" onClick={() => setIsOpen(true)}>
          <div className="h-96 w-full mb-2.5 flex items-center justify-center">
            <img src={post.url} alt={post.name} className="max-w-full max-h-full border" />
          </div>

          <p className="text-center text-lg font-semibold">{post.name}</p>
        </div>
      )}
    </>
  );
};

export default Post;
