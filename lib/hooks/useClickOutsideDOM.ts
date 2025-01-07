"use client";

import { useEffect, useRef } from "react";

const useClickOutsideDOM = (handler: any) => {
  const domNodeRef = useRef<any>();
  useEffect(() => {
    const domHandler = (e: any) => {
      if (!domNodeRef.current) {
        return;
      }
      if (!domNodeRef.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", domHandler);
    return () => {
      document.removeEventListener("mousedown", domHandler);
    };
  });
  return domNodeRef;
};

export default useClickOutsideDOM;
