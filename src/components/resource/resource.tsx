import { component$, Resource, useResource$, useSignal } from "@builder.io/qwik";

export default component$(() => {

  // This happens server side
  const postResource = useResource$(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  });

  return (
    <>
      <Resource
        value={postResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to load posts</div>}
        onResolved={(posts: any) => {
          return posts.map((post: any) => <div>
            {JSON.stringify(post)}
          </div>);
        }}
      />
    </>
  );
});
