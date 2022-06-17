const Post = ({ open, post, setOpen, setPhotoIndex, setOpenImages, index }) => (
  <div
    className="max-w-md w-full mx-auto py-4 border p-1.5 cursor-pointer"
    onClick={() => {
      if (!open) setOpen(true);
      if (open) {
        setPhotoIndex(index);
        setOpenImages(true);
        setOpen(false);
      }
    }}>
    <div className="h-96 w-full mb-2.5 flex items-center justify-center">
      <img //
        src={post.url}
        alt={post.name}
        className="max-w-full max-h-full border"
      />
    </div>

    <p className="text-center text-lg font-semibold">{post.name}</p>
  </div>
);

export default Post;
