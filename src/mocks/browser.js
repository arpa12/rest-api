import { rest, setupWorker } from "msw";
import { blogs } from "../data";

const worker = setupWorker(
  rest.get("/api/blogs", (req, res, ctx) => {
    return res(ctx.json({ blogs }));
  }),
  rest.post("/api/blogs/new", async (req, res, ctx) => {
    const blog = await req.json();
    blog.id = blogs.length + 1;
    blogs.push(blog);

    return res(ctx.status(201), ctx.json({ blog }));
  })
);

worker.start();
