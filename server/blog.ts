export interface BlogPost {
  title: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Learn React',
    slug: 'how-to-learn-react',
    content: 'Start with components, then hooks, then advanced patterns...',
  },
  {
    title: 'Understanding TypeScript',
    slug: 'understanding-typescript',
    content: 'TypeScript adds static typing to JavaScript, improving safety...',
  },
  {
    title: 'Node.js Server Basics',
    slug: 'nodejs-server-basics',
    content: 'Express is a fast and minimal framework for Node.js...',
  },
  {
    title: 'The Future of Web Development',
    slug: 'future-of-web-dev',
    content: 'WebAssembly, AI tools, and better bundlers are changing the game...',
  },
  {
    title: 'What is Server Side Rendering?',
    slug: 'what-is-ssr',
    content: 'SSR renders HTML on the server and improves performance...',
  },
  {
    title: 'CSS Tips for Developers',
    slug: 'css-tips',
    content: 'Use Flexbox, Grid, and custom properties effectively...',
  },
  {
    title: 'Mastering JavaScript Closures',
    slug: 'mastering-closures',
    content: 'Closures allow inner functions to access outer variables...',
  },
  {
    title: 'Debugging in VS Code',
    slug: 'debugging-vscode',
    content: 'Set breakpoints, use the debugger tab, and console.log wisely...',
  },
  {
    title: 'React vs Vue: A Comparison',
    slug: 'react-vs-vue',
    content: 'Both are great! React offers flexibility, Vue has simplicity...',
  },
  {
    title: 'Why Use TypeScript in 2025?',
    slug: 'why-typescript-2025',
    content: 'Modern apps are big. TS helps catch bugs before they happen...',
  }
];
