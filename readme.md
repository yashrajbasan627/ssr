1. Because we are using ts+tsx lots of unnecessary file we need to create to compile main index.ts file. i created start.ts file because index.ts was not allowing to import tsx expression file. This thing will make harder to manage the large codebase

2. because we are using hydration. server render and client render should be same otherwise process of event attaching will not happen. because i used props. i need to serialize prop data in server file and index.ts file. it took lot of time. faced lot of mismatch between server rendered html and client side rendered html

3. Even little spacing issues can create mismatch.

4. we need to create separate bundle js file for each component. just like i added header bundle in webpack and also need to add to server/index.ts file using renderToString. imagine, 100 components and you entire sever.ts piled with script strings

5. As you can see in client folder, i need to create separate file for hydrating header component. this approach of hydrating components which is needed is known as island architecture which is getting used by astro and next

6. mostly devs use requestIdleCallback for lazy hydration. it is function which schedule work after the browser finishes layouting and rendering(After pages loads). it is mostly used to do some non critical background tasks. we can use this thing to hydrate non critical parts such as footer. it is bad for critical UI elements such as button. big problem with requestIdleCallback is that it is only available in limited versions of the browser. it means we need to write or find polyfill and keep maintaining it

7. To do lazy hydration for critical UI elements. we have only async option in script to load that specific component

8.

