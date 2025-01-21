import { Portals } from "functionalui/types";
import { ReactNode } from "react";

export const PORTAL: { [key: number]: { id: string; html: ReactNode } } = {
  // [Portals.GlobalEventNotification]: { id: "#papnot", html: <div id="p-ap-not" ></div> },
  // [Portals.Modals]: {id: "#pmodmodify", html: <div id="p-mod-modify" ></div>}
  [Portals.GlobalEventNotification]: {
    id: "#papnot",
    html: <div id="papnot"></div>,
  },
  [Portals.Modals]: { id: "#pmodmodify", html: <div id="pmodmodify"></div> },
};
