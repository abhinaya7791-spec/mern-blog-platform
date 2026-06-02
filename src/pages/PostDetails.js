import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // ✅ fetch comments (outside useEffect)
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `https://mern-blog-platform-tcb4.onrender.com/api/comments/${id}`
      );
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ load comments when page opens / id changes
  useEffect(() => {
    fetchComments();
  }, [id]);

  // ✅ add comment
  const addComment = async () => {
    if (!text) return;

    try {
      await axios.post(
        "https://mern-blog-platform-tcb4.onrender.com/api/comments/add",
        {
          text,
          postId: id,
          username: "abi",
        }
      );

      setText("");
      fetchComments(); // refresh comments after adding
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Comments</h1>

      <input
        placeholder="Write Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addComment}>Add Comment</button>

      <hr />

      {comments.map((comment) => (
        <div key={comment._id}>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostDetails;