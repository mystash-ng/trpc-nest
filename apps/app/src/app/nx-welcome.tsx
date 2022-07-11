import React, { useState } from "react";
import { trpc } from "../trpc";

export function NxWelcome({ title, ...rest }: { title: string }) {
  const [prompt, setPrompt] = useState(0);
  const hello = trpc.useQuery(['server']);
  return (
    <React.Fragment>
      <button onClick={() => {setPrompt((prev) => prev + 1)}}>
        fire endpoint
      </button>
      <h1>{prompt}</h1>
      <h2>{hello.data?.name}</h2>
    </React.Fragment>
  );
}

export default NxWelcome;
