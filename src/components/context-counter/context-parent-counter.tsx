import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { context } from "~/components/context-counter/counter-state";
import ContextChildCounter from "~/components/context-counter/context-child-counter";

export default component$(() => {

  const counter = useStore({
    count: 0
  });

  useContextProvider(context, counter);

  return (
    <>
      <h1>Context Parent Counter</h1>
      <p>Counter: {counter.count}</p>
      <button onClick$={() => counter.count++}>Count</button>
      <ContextChildCounter />
    </>
  );
});
