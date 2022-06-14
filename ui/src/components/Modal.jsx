import React from 'react';

const Modal = ({ setIsOpen, post }) => {
  return (
    <>
      <div className="bg-gray-500 fixed top-0 left-0 right-0 bottom-0" onClick={() => setIsOpen(false)} />
      <div className="fixed">
        <button className="bg-red-500" onClick={() => setIsOpen(false)}>
          Close
        </button>
        <div className="max-w-md w-full mx-auto py-4 border p-1.5" onClick={() => setIsOpen(true)}>
          <div className="h-96 w-full mb-2.5 flex items-center justify-center">
            <img src={post.url} alt={post.name} className="max-w-full max-h-full border" />
          </div>

          <p className="text-center text-lg font-semibold">{post.name}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
