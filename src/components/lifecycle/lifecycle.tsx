import { component$, useClientEffect$, useStore, useTask$ } from "@builder.io/qwik";

export default component$(() => {

  const state = useStore({counter: 0});

  useCustomHook();

  useTask$(() => {
    console.log("Task");
  });

  useClientEffect$( () => {
    console.log("Counter: ", state.counter);
  }, {
    eagerness: "load"
  });

  return (
    <>
      <h1>Component Lifecycle</h1>
      <p>Open the console to see the lifecycle events.</p>
      <button onClick$={() => state.counter++}>Increment</button>
    </>
  );
});

export function useCustomHook(){
  console.log("useCustomHook");
}
