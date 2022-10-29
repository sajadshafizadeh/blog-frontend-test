// import {useRouter} from 'next/Router';

const SinglePost = (props) => {
	
	console.log(props.post);

	return (
		<div>
			<h2>Single Post Page</h2>
			<span>Check out the console</span>
		</div>
	);
}


export async function getServerSideProps (context){

	const {postId} = context.params;

	// To define post service provider 
	// const postsURL = 'https://jsonplaceholder.typicode.com/posts/1'; -- Not supported in Iran
	const postsURL = `https://dummyjson.com/posts/${postId}`;

	try {

		// To get the signle post & convert it to json formatterd
		const post = await fetch(postsURL).then( (res) => res.json() );

		// To return props
		return {
			props: {
				post,
			},
		};

	// To do error handling
	} catch (error) {
		return {
			props: {
				post: [],
				error: error,
			},
		};
	}
}

export default SinglePost;