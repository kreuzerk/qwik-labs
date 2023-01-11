import { createContext } from "@builder.io/qwik";

export const context = createContext<CounterState>('counter');

export interface CounterState {
  count: number;
}
