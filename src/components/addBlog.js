import React, { useState } from "react";

const AddBlog = ({ addNewBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: "", body: "" });

  const handleAddBlog = async () => {
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

      const createdBlog = await response.json();
      addNewBlog(createdBlog.blog);
      setNewBlog({ title: "", body: "" }); // Clear the newBlog state
    } catch (error) {
      console.error("Error adding new blog:", error);
    }
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
