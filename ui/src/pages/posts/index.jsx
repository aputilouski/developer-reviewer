import React, { useEffect, useState } from 'react';
import api from 'api';
import { Spin } from 'components';
import useInfiniteScroll from './useInfinite';
import Modal from 'react-modal';
import ModalComponent from './Modal';

const Posts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

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
    },
  };

  const loadData = () => {
    api.getPosts(page).then(res => {
      setData(res.rows);
    });
  };

  const moreData = () => {
    api.getPosts(page + 1).then(res => {
      setData([...data, ...res.rows]);
      setPage(page + 1);
      setIsFetching(false);
    });
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

  const isScrolling = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    setIsFetching(true);
  };

  let subtitle;
  useEffect(() => {
    loadData();
    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, []);

  useEffect(() => {
    if (isFetching) {
      moreData();
    }
  }, []);

  // Modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState(null);

  const openModal = id => {
    setId(id);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Spin spinning={!data?.length}>
        <div className="flex flex-col gap-3 relative">
          {data?.map(post => (
            <div className="w-full mx-auto py-4 border p-1.5" onClick={() => openModal(post.id)}>
              <div className="w-[1000px] h-96 mb-2.5 flex items-center justify-center">
                <img src={post.url} alt={post.name} className="max-h-full border" />
              </div>

              <p className="text-center text-lg font-semibold">{post.name}</p>
            </div>
          ))}
        </div>
      </Spin>
      {modalIsOpen && (
        <Spin spinning={!data?.length}>
          <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <button onClick={closeModal} className="flex justify-end">close</button>
            <ModalComponent data={data} id={id} />
          </Modal>
        </Spin>
      )}
    </>
  );
};

export default Posts;
