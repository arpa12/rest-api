import React, { useState, useEffect } from "react";
import "./app.css";
import BlogItems from "./components/blogItems";
import AddBlog from "./components/addBlog";

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const blogsFromStorage = localStorage.getItem("blogs");
    if (!blogsFromStorage) {
      try {
        const response = await fetch("/api/blogs");  // Corrected endpoint here
        const data = await response.json();
        setBlogs(data.blogs);  // Update to setBlogs(data.blogs);

        // Store the updated data in localStorage
        localStorage.setItem("blogs", JSON.stringify(data.blogs));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    } else {
      setBlogs(JSON.parse(blogsFromStorage));
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <BlogItems blogs={blogs} />
      <AddBlog fetchBlogs={fetchBlogs} />
    </div>
  );
}

export default App;
