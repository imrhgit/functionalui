import { Portals } from "functionalui/types";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PORTAL } from "./types";

const GlobalEventPortal = ({ children }: { children: React.ReactNode }) => {
  return <PlatformPortal>{children}</PlatformPortal>;
};

export default GlobalEventPortal;

const PlatformPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  // if (document) {
  //   const elem = document.querySelector(
  //     PORTAL[Portals.GlobalEventNotification].id
  //   );
  //   return mounted && elem ? createPortal(children, elem) : null;
  // } else {
  //   return null;
  // }

  return mounted
    ? createPortal(
        children,
        document.querySelector(PORTAL[Portals.GlobalEventNotification].id) ||
          document.body
      )
    : null;
};
