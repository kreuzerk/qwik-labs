import { component$, useResource$, useStore, useTask$ } from "@builder.io/qwik";

export default component$(() => {
  // also works with useSignal
  const counter = useStore({
    count: 0,
    doubledCount: 0
  });

  useTask$(({track}) => {
    track(() => counter.count);
    // side effect
    console.log('counter updated in use Task');
    counter.doubledCount = counter.count * 2;
  })

  // this doesnt seem to work currently
  const tripleCount = useResource$(({track}) => {
    track(() => counter.count);
    return counter.count * 3;
  })

  return (
    <>
      <h1>Counter tracker</h1>
      <button onClick$={() => counter.count++}>Increment</button>
      <p>Counter: {counter.count}</p>
      <p>Counter doubled: {counter.doubledCount}</p>
      <p>Counter tripled: {tripleCount.promise}</p>
    </>);
});
