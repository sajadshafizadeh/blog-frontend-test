import Image from "next/image";
import profilePic from "../../Assets/Images/profile.jpg";
const SinglePost = (props) => {
  console.log(props.post);
  const post = props.post;
  const tags = props.post.tags;

  return (
    <div className="all-posts-screen">
      <h1 className="title-screen-post">Overreacted</h1>
      <h2 className="each-title-post">{post.title}</h2>
      <span className="body-post">{post.body}</span>
      <p className="body-post ">
        The way npm audit works is broken. Its rollout as a default after every
        npm install was rushed, inconsiderate, and inadequate for the front-end
        tooling.{" "}
      </p>{" "}
      <p className="body-post ">
        Have you heard the story about{" "}
        <a href="#" className="link-text">
          the boy who cried wolf?
        </a>{" "}
        Spoiler alert: the wolf eats the sheep. If we don’t want our sheep to be
        eaten, we need better tools. As of today, npm audit is a stain on the
        entire npm ecosystem.
      </p>
      <p className="body-post line">
        The best time to fix it was before rolling it out as a default. The next
        best time to fix it is now. In this post, I will briefly outline how it
        works, why it’s broken, and what changes I’m hoping to see.
      </p>
      <h2 className="each-title-post  ">How does npm audit work?</h2>
      <p>
        <a href="#" className="link-text">
          {" "}
          Skip ahead
        </a>{" "}
        if you already know how it works. Your Node.js application has a
        dependency tree. It might look like this:
      </p>
      <div className="code-box">
        <ul>
          <li>
            your-app
            <ul>
              <li> - view-library@1.0.0 </li>
              <li>- design-system@1.0.0</li>
              <li>
                - model-layer@1.0.0
                <ul>
                  <li>- design-system@1.0.0</li>
                  <li>- design-system@1.0.0</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p>Most likely, it’s a lot deeper.</p>
      <p>
        Now say there’s a vulnerability discovered in{" "}
        <span className="info-text"> network-utility@1.0.0:</span>
      </p>
      <div className="code-box">
        <ul>
          <li>
            your-app
            <ul>
              <li> - view-library@1.0.0 </li>
              <li>- design-system@1.0.0</li>
              <li>
                - model-layer@1.0.0
                <ul>
                  <li>- design-system@1.0.0</li>
                  <li>- design-system@1.0.0</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p className="body-post ">
        This gets published in a special registry that npm will access next time
        you run npm audit. Since npm v6+, you’ll learn about this after every{" "}
        <span className="info-text">npm install</span>
      </p>
      <div className="code-box">
        <table className="table-box">
          <tr>
            <td className="td-one"> Moderate </td>
            <td className="td-tow"> Regular Expression Denial of Service </td>
          </tr>
          <tr>
            <td className="td-one"> Package </td>
            <td className="td-tow">│ browserslist </td>
          </tr>
          <tr>
            <td className="td-one">Patched in</td>
            <td className="td-tow">=4.16.5</td>
          </tr>
          <tr>
            <td className="td-one">Dependency of</td>
            <td className="td-tow">react-scripts</td>
          </tr>
          <tr>
            <td className="td-one"> Path </td>
            <td className="td-tow">
              {" "}
              react-scripts react-dev-utils browserslist{" "}
            </td>
          </tr>
          <tr>
            <td className="td-one">More info </td>
            <td className="td-tow">https://npmjs.com/advisories/1747</td>
          </tr>
        </table>
      </div>
      <p className="body-post ">
        In the meantime, I am planning to close all GitHub issues from npm audit
        that I see going forward that don’t correspond to a real vulnerability
        that can affect the project. I invite other maintainers to adopt the
        same policy. This will create frustration for our users, but the core of
        the issue is with npm. I am done with this security theater. Node.js/npm
        have all the power to fix the problem. I am in contact with them, and I
        hope to see this problem prioritized.
      </p>
      <div className="tag-box">
        {tags.map((tag) => {
          return <a className="link-text tag-link">{tag}</a>;
        })}
      </div>
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
    </div>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.params;

  // To define post service provider
  // const postsURL = 'https://jsonplaceholder.typicode.com/posts/1'; -- Not supported in Iran
  const postsURL = `https://dummyjson.com/posts/${postId}`;

  try {
    // To get the signle post & convert it to json formatterd
    const post = await fetch(postsURL).then((res) => res.json());

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
        // error: error,
      },
    };
  }
}

export default SinglePost;
