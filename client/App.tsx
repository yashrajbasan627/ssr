import React, { Suspense } from "react";
import { useState } from "react";
import { AsyncContent } from "./AsyncContent";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Streaming SSR with React 18</h1>
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      <Suspense fallback={<p>Loading async content...</p>}>
        {show && <AsyncContent />}
      </Suspense>
    </div>
  );
}
