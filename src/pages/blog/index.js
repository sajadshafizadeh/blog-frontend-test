import Link from "next/link";
import Image from "next/image";
import { PostItems } from "../../components/PostItems";
import profilePic from "../../Assets/Images/profile.jpg";
import Darkmode from "darkmode-js";

const PostsList = (props) => {

  const options = {
    bottom: "64px",
    right: "32px",
    left: "unset",
    time: "0.5s",
    mixColor: "#fff",
    backgroundColor: "#fff",
    buttonColorDark: "#100f2c",
    buttonColorLight: "#fff",
    saveInCookies: false,
    label: "🌓",
    autoMatchOsTheme: true,
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  const posts = props.posts.posts;
  return (
    <div className="all-posts-screen">
      <section className="header-posts">
        <h1>Overreacted</h1>
        <div className="profile-data">
          <Image
            src={profilePic}
            alt="user profile picture"
            height={60}
            width={60}
            className="profile-pic"
          />
          <div className="box-text-profile">
            <p>
              Personal blog by{" "}
              <a href="" className="text-profile">
                Dan Abramov.
              </a>{" "}
            </p>
            <p> I explain with words and code.</p>
          </div>
        </div>
      </section>
      <section className="container">
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <PostItems
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  tags={post.tags}
                />
              </Link>
            );
          })
        ) : (
          <div className="box-loading">
            <div className="loading"></div>
          </div>
        )}
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  // To define posts service provider
  // const postsURL = 'https://jsonplaceholder.typicode.com/posts'; -- Not supported in Iran
  const postsURL = "https://dummyjson.com/posts";

  try {
    // To get the posts & convert it to json formatterd
    const posts = await fetch(postsURL).then((res) => res.json());

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
        // error: error,
      },
    };
  }
}

// To set PostsList method as the default executable one
export default PostsList;
