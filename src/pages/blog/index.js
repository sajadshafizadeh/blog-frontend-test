import {PostItems} from '../../components/PostItems';

const PostsList = (props) => {
	
	console.log(props.posts);

	return (
		<div>
			<PostItems />
			<span>Check out the console</span>
		</div>
	);
}


export async function getServerSideProps (context){

	// To define posts service provider 
	// const postsURL = 'https://jsonplaceholder.typicode.com/posts'; -- Not supported in Iran
	const postsURL = 'https://dummyjson.com/posts';

	try {

		// To get the posts & convert it to json formatterd
		const posts = await fetch(postsURL).then( (res) => res.json() );

		// To return props
		return {
			props: {
				posts,
			},
		};

	// To do error handling
	} catch (error) {
		return {
			props: {
				posts: [],
				error: error,
			},
		};
	}
}

// To set PostsList method as the default executable one
export default PostsList;