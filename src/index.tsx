import { serve } from "bun";
import index from "./index.html";
/*
const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
*/
import path from "path";

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})