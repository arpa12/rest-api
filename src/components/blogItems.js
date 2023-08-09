import React from "react";

function BlogItems({blogs}) {

  return (
    <div className="container">
      <h1>Blog</h1>
      <div>
        {blogs?.map((blogItem) => (
          <div className="blog-card" key={blogItem.id}>
            <h2>{blogItem.title}</h2>
            <p>{blogItem.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogItems;
