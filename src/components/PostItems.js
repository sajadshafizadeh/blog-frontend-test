export const PostItems = (props) => {

	return (
		<div className="post-item">
			<h2>{props.post.title}</h2>
			<span>{props.post.body}</span>
		</div>
	);
}