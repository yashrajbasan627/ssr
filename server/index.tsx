import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString, renderToStaticMarkup,renderToPipeableStream } from "react-dom/server";
import { blogPosts } from './blog';

import App from "../client/App"; 
import { Header } from '../client/components/Header/index';
import { Footer } from '../client/components/Footer';
import { PassThrough } from 'stream';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get("/", (req, res) => {
  let didError = false;

  const stream = new PassThrough();

  const { pipe } = renderToPipeableStream(
    <App />,
    {
      bootstrapScripts: ["/bundle.js", "/client_DelayedComponent_tsx.js"],

      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-Type", "text/html");


        res.write(`<!DOCTYPE html>
<html>
  <head><title>Streaming SSR</title></head>
  <body>
    <div id="root">`);


        pipe(res);

        
        res.on("close", () => {
          // we are using this even listener because we want
          // to close html after react is completed rendering
          res.write(`</div>
  </body>
</html>`);
          res.end();
        });
      },

      onError(err) {
        didError = true;
        console.error("Streaming error:", err);
      },
    }
  );
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));


app.listen(PORT,() => console.log(`server is started at ${PORT}`))