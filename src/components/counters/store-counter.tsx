import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const counter = useStore({
    count: 0
  });

  return (
    <>
      <h1>Store Counter</h1>
      <button onClick$={() => counter.count++}>Increment</button>
      <p>Counter: {counter.count}</p>
    </>
  );
});
