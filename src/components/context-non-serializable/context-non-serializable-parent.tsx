import { component$, noSerialize, useClientEffect$, useStore } from "@builder.io/qwik";
import ContextNonSerializableChild from "~/components/context-non-serializable/context-non-serializable-child";

export default component$(() => {

  const foo = () => console.log("Real Madrid is the");

  const state = useStore({
    foo: null
  });

  useClientEffect$(() => {
    state.foo = noSerialize<any>(foo);
  });

  return (
    <>
      <ContextNonSerializableChild state={state} />
    </>
  );
});
