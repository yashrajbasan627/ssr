import React from 'react';
import { BlogPost } from '../server/blog';

export type AppProps = {
  page: 'home' | 'blog';
  blog?: BlogPost;
  blogs?: BlogPost[];
};

const App: React.FC<AppProps> = ({ page, blogs, blog }) => {
  if (page === 'blog' && blog) {
    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <a href="/">← Back to blog list</a>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {blogs?.map((b) => (
          <li key={b.slug}>
            <a onClick={(e) => {
              e.preventDefault();
              console.log("clicked!");
              }} href={`/blog/${b.slug}`}>{b.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
