import { Portals } from "functionalui/types";

export const PORTAL: any = {
  // [Portals.GlobalEventNotification]: { id: "#papnot", html: <div id="p-ap-not" ></div> },
  // [Portals.Modals]: {id: "#pmodmodify", html: <div id="p-mod-modify" ></div>}
  [Portals.GlobalEventNotification]: {
    id: "#papnot",
    html: <div id="papnot"></div>,
  },
  [Portals.Modals]: { id: "#pmodmodify", html: <div id="pmodmodify"></div> },
};
