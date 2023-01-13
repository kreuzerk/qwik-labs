import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Lifecycle from "~/components/lifecycle/lifecycle";
import { style } from "styled-vanilla-extract/qwik";
import Resource from "~/components/resource/resource";
import ApiCall from "~/components/api-call/api-call";
import Expander from "~/components/expander/expander";

export default component$(() => {

  return (
    <div>
      {/*
      <TakeAndGive name="test" myCustomEvent$={() => console.log('handled in the parent')}/>
      */}

      {/*
      <SignalCounter />
      <ParentCounter />
      <ContextParentCounter />
      <CounterTracker />
      <ContextNonSerializableParent />
      <StoreCounter />
      <div style="height: 5000px; background: blue">
      </div>

      <Lifecycle />
      <ApiCall />
      <Resource />
      */}

      <Expander>
        <h1>My content</h1>
      </Expander>




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

