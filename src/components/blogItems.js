import React, { useState, useEffect } from "react";

function BlogItems() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Blog</h1>
      <div>
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogItems;
