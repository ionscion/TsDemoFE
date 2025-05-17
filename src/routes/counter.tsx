// src/counter.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import MyButton from "../components/MyButton.tsx";
import { type JSX } from "react";

function CounterPage(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-green-200">Counter Page</h2>
      <p className="text-lg">Current count: {count}</p>
      <div className="flex gap-2">
        <MyButton label="Increment" onClick={() => setCount((c) => c + 1)} />
        <MyButton
          label="Reset"
          onClick={() => setCount(0)}
          disabled={count === 0}
        />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/counter")({
  component: CounterPage,
});
