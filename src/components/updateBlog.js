import React, { useState } from 'react';

const UpdateBlog = ({ blog, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState(blog.title);
  const [updatedBody, setUpdatedBody] = useState(blog.body);

  const handleUpdate = async () => {
    const updatedData = {
      id: blog.id,
      title: updatedTitle,
      body: updatedBody,
    };

    try {
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error updating blog');
      }

      const data = await response.json();
      // Handle the updated data, e.g., trigger a state update.
      onUpdate(data.blog);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <textarea
        value={updatedBody}
        onChange={(e) => setUpdatedBody(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Blog</button>
    </div>
  );
};

export default UpdateBlog;
