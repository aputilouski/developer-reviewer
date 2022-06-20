import { useCallback, useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CircularProgress } from '@mui/material';
import Post from './Post';

const HorizontalPost = ({ open, size, postId, setSize, loading, setPostId, totalRecords, mergeRecords, handleOpenImages, handleOpenHorizontalPosts }) => {
  const observer = useRef();
  const observeAll = useRef();

  const [id, setId] = useState(0);

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

  const AllElementRef = useCallback(node => {
    observeAll.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setId(node.id.split('-').slice(1).join('-'));
      }
    });
    if (node) observeAll.current.observe(node);
  }, []);

  const slideLeft = () => {
    const element = document.getElementById('slider');
    element.scrollLeft = element.scrollLeft - 500;
  };
  const slideRight = () => {
    const element = document.getElementById('slider');
    element.scrollLeft = element.scrollLeft + 500;
  };

  useEffect(() => {
    const element = document.getElementById(`horizontal-${postId}`);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [postId]);

  useEffect(() => {
    if (!open) {
      setPostId(id);
    }
  }, [open, id, setPostId]);

  return (
    <div className="relative flex items-center">
      <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" size={80} onClick={slideLeft} />
      <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {mergeRecords?.map((post, index) => (
          <div id={`horizontal-${index}-${post?.name}`} className="w-[400px] inline-block p-2 cursor-pointer" key={post.id} ref={index === mergeRecords?.length - 1 ? lastElementRef : AllElementRef}>
            <Post
              {...{
                post,
                open,
                index,
                handleOpenImages,
                handleOpenHorizontalPosts,
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid place-items-center py-4">{loading && <CircularProgress />}</div>
      <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" size={100} onClick={slideRight} />
    </div>
  );
};
export default HorizontalPost;
