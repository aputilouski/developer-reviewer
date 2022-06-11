const Post = ({ post }) => (
  <div>
    <img //
      src={post.url}
      alt={post.name}
    />
    <p>{post.name}</p>
  </div>
);

export default Post;
