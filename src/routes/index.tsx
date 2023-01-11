import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ContextParentCounter from "~/components/context-counter/context-parent-counter";
import CounterTracker from "~/components/counter-tracker/counter-tracker";
import ContextNonSerializableParent from "~/components/context-non-serializable/context-non-serializable-parent";
import StoreCounter from "~/components/counters/store-counter";

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      {/*
      <TakeAndGive name="test" myCustomEvent$={() => console.log('handled in the parent')}/>
      */}

      <h1>Counters</h1>
      {/*
      <SignalCounter />
      <ParentCounter />
      <ContextParentCounter />
      <CounterTracker />
      <ContextNonSerializableParent />
      */}
      <StoreCounter />

      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
