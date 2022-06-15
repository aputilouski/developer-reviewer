import React, { useEffect, useState } from 'react';
import api from 'api';
import { Spin } from 'components';
import useInfiniteScroll from './useInfinite';
import ModalComponent from './ModalComponent';

const Posts = () => {

  // Scroll
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

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

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Spin spinning={!data?.length && !isFetching}>
        <div className="flex flex-col gap-3">
          {data?.map(post => (
            <div key={post.id} className="w-full mx-auto py-4 border p-1.5 hover:shadow-2xl" onClick={() => openModal(post.id)}>
              <div className="w-[1000px] h-96 mb-2.5 flex items-center justify-center">
                <img src={post.url} alt={post.name} className="max-h-full border" />
              </div>

              <p className="text-center text-lg font-semibold">{post.name}</p>
            </div>
          ))}
          <Spin spinning='true'></Spin>
        </div>
      </Spin>
      {modalIsOpen && <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} data={data} id={id} />}
    </>
  );
};

export default Posts;
