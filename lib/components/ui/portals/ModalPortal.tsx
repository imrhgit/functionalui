import { Portals } from "functionalui/types";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PORTAL } from "./types";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  const elem = document.querySelector(PORTAL[Portals.Modals].id);
  return mounted && elem ? createPortal(children, elem) : null;
};

export default ModalPortal;
