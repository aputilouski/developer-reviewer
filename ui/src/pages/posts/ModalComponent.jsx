import React from 'react';
import { Spin } from 'components';

import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalComponent = ({ modalIsOpen, closeModal, data, id }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },
  };

  return (
    <>
      <Spin spinning={!data?.length}>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
          <button onClick={closeModal} className="flex justify-end">
            <i className="fa-solid fa-xmark text-5xl text-red-500"></i>
          </button>
          <FontAwesomeIcon className="absolute top-80 right-2 text-gray-500" icon="fa-solid fa-chevron-right" style={{ height: '40px' }} />
          <div className="flex flex-col mt-12 hover:shadow-xl">
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
        </Modal>
      </Spin>
    </>
  );
};

export default ModalComponent;
