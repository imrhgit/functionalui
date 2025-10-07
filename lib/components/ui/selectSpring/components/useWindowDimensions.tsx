"use client";

import { useEffect, useState } from "react";

const useWindowDimensions = (): { width: number; height: number } => {
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

  return windowDimensions;
};

export default useWindowDimensions;
