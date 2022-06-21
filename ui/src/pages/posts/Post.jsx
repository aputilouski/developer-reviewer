import React, {useState} from 'react';
import { Spin } from 'components';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Post({ post,resData}) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div key={post.id} className="max-w-md w-full mx-auto py-4 border p-1.5" onClick={() => setOpenModal(true)}>
        <div key={post.id} className="h-96 w-full mb-2.5 flex items-center justify-center">
          <img //
            src={post.url}
            alt={post.name}
            className="max-w-full max-h-full border"
          />
        </div>

        <p className="text-center text-lg font-semibold">{post.name}</p>
      </div>
      {openModal && (
        <Spin spinning={!resData?.length}>
          <Modal isOpen={setOpenModal}>
            <FontAwesomeIcon className="absolute top-80 right-2 text-gray-500" icon="fa-solid fa-chevron-right" style={{ height: '40px' }} />
            <div className="flex flex-col mt-12 hover:shadow-xl">
              <div className="flex justify-center items-center ">
                <Spin spinning={!resData?.length}>
                  <div className="flex gap-3 overflow-x-auto">
                    {resData?.slice(resData.findIndex(currentPost => currentPost.id === post.id)).map(post => (
                      <div key={post.id} className="w-[550px] mx-auto py-4 p-1.5">
                        <div className="h-96 mb-2.5 flex items-center justify-center">
                          <img src={post.url} alt={post.name} className="max-w-none w-[500px] max-h-[340px] border" />
                        </div>

                        <p className="text-center text-lg font-semibold">{post.name}</p>
                      </div>
                    ))}
                  </div>
                </Spin>
              </div>
            </div>
          </Modal>
        </Spin>
      )}
    </>
  );
}

export default Post;
