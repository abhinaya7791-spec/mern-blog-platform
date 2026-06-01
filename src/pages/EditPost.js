import { useState } from "react";
import axios from "axios";

function EditPost() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const updatePost = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        {
          title,
          content,
        }
      );

      alert("Post Updated");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>

      <input
        placeholder="Post ID"
        value={id}
        onChange={(e) =>
          setId(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="New Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br /><br />

      <textarea
        placeholder="New Content"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <br /><br />

      <button onClick={updatePost}>
        Update Post
      </button>
    </div>
  );
}

export default EditPost;