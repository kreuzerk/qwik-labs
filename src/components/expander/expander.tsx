import { component$, Slot, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './expander.css?inline';

export default component$(() => {
  useStyles$(styles);
  const expanded = useSignal(false);
  return (
    <>
      <button class="my-btn" onClick$={() => expanded.value = !expanded.value}>{expanded.value ? "Close" : "Expand"}</button>
      <div class="my-expander-content">
      {expanded.value ? <Slot /> : null}
        </div>
    </>
  );
});
