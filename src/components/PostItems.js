export const PostItems = ({ body, title, tags }) => {
  return (
    <div className="post-item">
      <h1 className="each-title-posts">{title}</h1>
      <p>{body}</p>
    </div>
  );
};
