import React, { useState } from "react";
import "./app.css";
import BlogItems from "./components/blogItems";
import AddBlog from "./components/addBlog";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addNewBlog = (addBlog) => {
    setBlogs([...blogs, addBlog]);
  };

  return (
    <div className="container">
      <BlogItems blogs={blogs} /> {/* Pass the blogs state to BlogItems component */}
      <AddBlog addNewBlog={addNewBlog} />
    </div>
  );
}

export default App;
