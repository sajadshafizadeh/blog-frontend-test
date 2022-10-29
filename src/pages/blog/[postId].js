import {useRouter} from 'next/Router';

const SinglePost = () => {
	
	const Router = useRouter();

	return (
		<h2>Post id is: {Router.query.postId}</h2>
	);
}

export default SinglePost;