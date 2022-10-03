import "./Post.css";
function Post(props) {
  const { body, id, title, userId } = props;
  return (
    <div className="post">
      <p>{id}</p>
      <h1>{title}</h1>
      <p>{body}</p>
      <h2>User ID: {userId}</h2>
    </div>
  );
}
export default Post;
