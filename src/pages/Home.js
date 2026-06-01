import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/posts/${id}`
      );

      alert("Post Deleted");

      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Blogs</h1>

      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h2>{post.title}</h2>

          <p>ID : {post._id}</p>

          <p>{post.content}</p>

          <p>User ID : {post.userId}</p>

          <Link to={`/post/${post._id}`}>
           View Comments
          </Link>

          <br />
          <br />
          
          <button
            onClick={() =>
              deletePost(post._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;