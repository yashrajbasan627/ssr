import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { blogPosts } from './blog';

import App, { AppProps } from "../client/App"; 
import { Header } from '../client/components/Header';
import { Footer } from '../client/components/Footer';

// SSR: import react component

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static(path.resolve(__dirname, '../public')));

app.get("/", (req, res) => {

  const props:AppProps = { page: 'home', blogs: blogPosts };
  // This is will not hydrate becuase there is no event
  // listeners attached.
  const headerHTML = renderToStaticMarkup(<Header />)
  const footerHTML = renderToStaticMarkup(<Footer />)

  
  const appHtml = renderToString(<App {...props} />);
    
    res.send(`
        <!DOCTYPE html>
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
      ${headerHTML}
      <div id="root">${appHtml}</div>
      ${footerHTML}
      <script>window.__INITIAL_DATA__ = ${JSON.stringify(props)};</script>
      <script src="/bundle.js"></script>
      </body>
    </html>
    `)

})

app.get('/blog/:slug', (req, res) => {
  const blog = blogPosts.find((b) => b.slug === req.params.slug);
  
  if (!blog) {
    res.status(404).send('<h1>Blog Not Found</h1>');
    return;
  }

  const props:AppProps = {page:"blog",blog:blog}

  const appHtml = renderToString(<App {...props} />);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${blog.title}</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(props)};</script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});


app.listen(PORT,() => console.log(`server is started at ${PORT}`))