import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CircularProgress } from '@mui/material';
import Post from './Post';

const HorizontalPost = ({ open, setOpenImages, setOpen, mergeRecords, setPhotoIndex, loading }) => {
  const slideLeft = () => {
    const element = document.getElementById('slider');
    element.scrollLeft = element.scrollLeft - 500;
  };
  const slideRight = () => {
    const element = document.getElementById('slider');
    element.scrollLeft = element.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" size={80} onClick={slideLeft} />
      <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {mergeRecords?.map((post, index) => (
          <div className="w-[400px] inline-block p-2 cursor-pointer" key={post.id}>
            <Post post={post} setPhotoIndex={setPhotoIndex} index={index} open={open} setOpenImages={setOpenImages} setOpen={setOpen}/>
          </div>
        ))}
      </div>
      <div className="grid place-items-center py-4">{loading && <CircularProgress />}</div>
      <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" size={100} onClick={slideRight} />
    </div>
  );
};
export default HorizontalPost;
