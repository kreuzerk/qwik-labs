import { component$ } from "@builder.io/qwik";

export default component$((state: any) => {
  console.log(state.foo());
  return (
    <></>
  );
});
