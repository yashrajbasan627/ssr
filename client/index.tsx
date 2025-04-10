export {}; // � important!
import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BlogPost } from '../server/blog';

declare global {
  interface Window {
    __INITIAL_DATA__: {
      page: 'home' | 'blog';
      blogs?: BlogPost[];
      blog?: BlogPost;
    };
  }
}

const props = window.__INITIAL_DATA__; // this caused lot of headaches
hydrateRoot(document.getElementById('root')!, <App {...props} />);
