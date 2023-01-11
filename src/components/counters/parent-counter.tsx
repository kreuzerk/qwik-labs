import { component$, useStore } from "@builder.io/qwik";
import ChildCounter from "~/components/counters/child-counter";

export default component$(() => {
  const counter = useStore({
    count: 0
  });

  return (
    <div>
      <h1>Parent Counter</h1>
      <p>{counter.count}</p>

      <button onClick$={() => {
        counter.count++;
      }}>Increment
      </button>

      <ChildCounter counter={counter} />
    </div>
  );

});
