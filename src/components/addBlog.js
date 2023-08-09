import React, { useState } from "react";

const AddBlog = ({ fetchBlogs }) => {
  const [newBlog, setNewBlog] = useState({ title: "", body: "" });

  const add = async (newBlog) => {
    try {
      const response = await fetch("/api/blogs/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        throw new Error("Error adding new blog");
      }

      const data = await response.json();
      return data.blogs;
    } catch (error) {
      console.error("Error adding new blog:", error);
      return [];
    }
  };

  const handleAddBlog = () => {
   add(newBlog)
   .then(() => { fetchBlogs()})
    
  };

  return (
    <div>
      <h2>Add a New Blog</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newBlog.body}
          onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
        />
        <button onClick={handleAddBlog}>Add Blog</button>
      </div>
    </div>
  );
};

export default AddBlog;
