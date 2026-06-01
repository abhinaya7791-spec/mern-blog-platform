import axios from "axios";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async () => {
    try {
      // ✅ GET TOKEN FROM LOCALSTORAGE
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/posts/create",
        {
          title,
          content
        },
        {
          headers: {
            Authorization: token   // ✅ IMPORTANT FIX
          }
        }
      );

      alert("Post Created");

      window.location.href = "/";

    } catch (err) {
      alert("Create Post Failed");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={createPost}>Create</button>
    </div>
  );
}