1. Because we are using ts+tsx lots of unnecessary file we need to create to compile main index.ts file. i created start.ts file because index.ts was not allowing to import tsx expression file. This thing will make harder to manage the large codebase

2. because we are using hydration. server render and client render should be same otherwise process of event attaching will not happen. because i used props. i need to serialize prop data in server file and index.ts file. it took lot of time. faced lot of mismatch between server rendered html and client side rendered html

3. 