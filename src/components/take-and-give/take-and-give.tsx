import { component$, PropFunction } from "@builder.io/qwik";

interface TakeAndGiveProps {
  name: string;
  myCustomEvent$?: PropFunction<() => void>;
}

export default component$((props: TakeAndGiveProps) => {
  return (
    <div>
      <h1>I received {props.name}</h1>
      <button onClick$={props.myCustomEvent$}>Click me</button>
    </div>
  );
});
