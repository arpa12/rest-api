import { rest, setupWorker } from "msw";
import { blogs } from "../data";

const worker = setupWorker(
  rest.get("/api/blogs", (req, res, ctx) => {
    return res(ctx.json({ blogs }));
  }),
  rest.post('/api/blogs/new', (req, res, ctx) => {
    const newBlog = req.body;
    console.log(newBlog);
    const blogsFromStorage = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = [...blogsFromStorage, { ...newBlog, id: blogsFromStorage.length + 1 }];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    
    return res(ctx.status(201), ctx.json({ blogs: updatedBlogs }));
  })
  
);

worker.start();
