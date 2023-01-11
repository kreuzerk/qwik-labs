import { component$ } from "@builder.io/qwik";

export interface ChildCounterProps {
  counter: any
}

export default component$((props: ChildCounterProps) => {
  return (
    <div>
      <h1>Child Counter</h1>
      <p>{props.counter.count}</p>

      <button onClick$={() => {
        props.counter.count++;
      }}>Increment
      </button>
    </div>
  );

});
