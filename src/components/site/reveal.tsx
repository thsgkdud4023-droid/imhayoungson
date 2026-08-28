import { createContext, useContext } from "react";

/** True once the preloader has finished and entrance animations may start. */
export const RevealContext = createContext(false);

export function useReveal() {
  return useContext(RevealContext);
}
