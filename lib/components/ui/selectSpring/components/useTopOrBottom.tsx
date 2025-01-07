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
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const elemTotalHeight: number = elem.height + (margin ? margin : 10);
  if (elemTotalHeight + elem.top > windowDimensions.height) {
    return -1;
  } else return 1;
};

export default useTopOrBottom;
