import api from 'api';
import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

import { Spin } from 'components';
import Post from './Post';
import { useState, useRef, useCallback, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import { CircularProgress } from '@mui/material';
import 'react-image-lightbox/style.css';
import HorizontalPost from './HorizontalPost';
import DialogComponent from './DialogComponent';

const Posts = () => {
  const fetcher = async url => {
    setLoading(true);
    const { data } = await axios.get(url);
    setTotalRecords(data?.count || 0);
    setLoading(false);
    return data;
  };

  const observer = useRef();
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openImages, setOpenImages] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [postId, setPostId] = useState('');

  const { data: Result, size, setSize } = useSWRInfinite(index => api.getPostsUrl(index + 1), fetcher, { revalidateFirstPage: false });
  const mergeRecords = [];
  Result?.forEach(res => mergeRecords.push(...res?.rows));

  const lastElementRef = useCallback(
    node => {
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && mergeRecords.length < totalRecords && !loading) {
          setSize(size + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, size, mergeRecords.length, setSize, totalRecords]
  );

  const handleOpenHorizontalPosts = ({ isOpenPost, id }) => {
    setOpen(isOpenPost);
    setPostId(id);
  };

  const handleOpenImages = ({ isOpenPost, id, index }) => {
    setOpen(isOpenPost);
    if (id) setPostId(id);
    setPhotoIndex(index);
    setOpenImages(true);
  };

  useEffect(() => {
    if (!open) {
      const element = document.getElementById(`${postId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [open, postId]);

  return (
    <div>
      <Spin spinning={!Result}>
        <DialogComponent open={open} setOpen={setOpen}>
          <HorizontalPost
            {...{
              open,
              size,
              postId,
              setSize,
              loading,
              setPostId,
              totalRecords,
              mergeRecords,
              handleOpenImages,
              handleOpenHorizontalPosts,
            }}
          />
        </DialogComponent>

        <div id="mainPostDiv" className="flex flex-col gap-3">
          {mergeRecords?.map((post, index) => (
            <div id={`${index}-${post?.name}`} key={post.id} ref={index === mergeRecords?.length - 1 ? lastElementRef : null}>
              <Post {...{ open, post, index, handleOpenHorizontalPosts, handleOpenImages }} />
            </div>
          ))}
          <div className="grid place-items-center py-4">{loading && <CircularProgress />}</div>
        </div>
      </Spin>

      {!!mergeRecords?.length && openImages && (
        <Lightbox
          clickOutsideToClose={false}
          mainSrc={mergeRecords[photoIndex].url}
          nextSrc={mergeRecords[(photoIndex + 1) % mergeRecords.length].url}
          prevSrc={mergeRecords[(photoIndex + mergeRecords.length - 1) % mergeRecords.length].url}
          onCloseRequest={() => setOpenImages(false)}
          onMovePrevRequest={() => {
            const prevIndex = (photoIndex + mergeRecords.length - 1) % mergeRecords.length;
            const record = mergeRecords[prevIndex];
            setPhotoIndex(prevIndex);
            setPostId(`${record.id - 1}-${record.name}`);
          }}
          onMoveNextRequest={() => {
            const nextIndex = (photoIndex + 1) % mergeRecords.length;
            const record = mergeRecords[nextIndex];
            setPhotoIndex(nextIndex);
            setPostId(`${record.id - 1}-${record.name}`);
          }}
        />
      )}
    </div>
  );
};

export default Posts;
