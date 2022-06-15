import React from 'react';
import { Spin } from 'components';

const Modal = ({ data, id }) => {
  return (
    <div className='flex flex-col mt-24'>
      <div className="flex justify-center items-center ">
        <Spin spinning={!data?.length}>
          <div className="flex gap-3 overflow-x-auto">
            {data?.slice(data.findIndex(currentPost => currentPost.id === id)).map(post => (
              <div key={post.id} className="w-[550px] mx-auto py-4 p-1.5">
                <div className="h-96 mb-2.5 flex items-center justify-center">
                  <img src={post.url} alt={post.name} className="max-w-[530px] max-h-[260px] border" />
                </div>

                <p className="text-center text-lg font-semibold">{post.name}</p>
              </div>
            ))}
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Modal;
