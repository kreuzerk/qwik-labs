import { component$, useContext } from "@builder.io/qwik";

import { context } from "~/components/context-counter/counter-state";

export default component$(() => {

  const counter = useContext(context);

  return (
    <>
      <h1>Context Child Counter</h1>
      <p>Counter: {counter.count}</p>
      <button onClick$={() => counter.count++}>Count</button>
    </>
  );
});
