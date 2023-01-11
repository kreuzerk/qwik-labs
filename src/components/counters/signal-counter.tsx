import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const counter = useSignal(0);

  return (
    <div>
      <h1>Signal Counter</h1>
      <button onClick$={() => counter.value++}>Increment</button>
      <p>Counter: {counter.value}</p>
    </div>
  );
});
