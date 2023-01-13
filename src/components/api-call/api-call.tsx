import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    todos: []
  });

  return (
    <>
      <h1>API Call</h1>
      {state.todos.map((t: any) => <div>{t.title}</div>)}
      <button onClick$={async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        state.todos = await response.json();
      }}>
        Fetch some posts
      </button>
    </>
  );
});
