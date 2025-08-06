"use client";

import { useEffect, useState } from "react";

interface D {
  height: number;
  width: number;
  top: number;
}
const useTopOrBottom = (elem: D, margin?: number): number => {
  // 1 top, -1 bottom, 0 invalid
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window ? window.innerWidth : 0,
        height: window ? window.innerHeight : 0,
      });
    };
    if (window) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const elemTotalHeight: number = elem.height + (margin ? margin : 10);
  if (elemTotalHeight + elem.top > windowDimensions.height) {
    return -1;
  } else return 1;
};

export default useTopOrBottom;
