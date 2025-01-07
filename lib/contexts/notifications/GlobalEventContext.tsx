"use client";

import { GlobalEventContextType } from "functionalui/types";
import React, { createContext, useCallback, useContext, useRef } from "react";
import { TOAST_TYPE, ToastTypes } from "../../styles/types/notification/types";

const GlobalEventContext = createContext<GlobalEventContextType>({
  globalEventRef: null,
  handleGlobalEventRef: undefined,
  catchUserAxiosNextApiError: undefined,
  catchUserAxiosFetcherError: undefined,
});

export function ProvideGlobalEventContext({
  children,
}: {
  children: React.ReactNode;
}) {
  // data
  const value = useSetGlobalEvent();
  return (
    <GlobalEventContext.Provider value={value}>
      {children}
    </GlobalEventContext.Provider>
  );
}
export const useGlobalEventContext = () => {
  return useContext(GlobalEventContext);
};

function useSetGlobalEvent() {
  const globalEventRef = useRef<any>(null);
  const handleGlobalEventRef = useCallback(
    (props: string, type: ToastTypes) => {
      globalEventRef.current?.(props, TOAST_TYPE[type]);
    },
    [],
  );

  const catchUserAxiosNextApiError = useCallback((error: any) => {
    if (error.response) {
      const errorMessage = error.response.data?.message || "An error occurred";
      handleGlobalEventRef(errorMessage, ToastTypes.Error);
    } else if (error.request) {
      // could not reach nextjs server
      handleGlobalEventRef("Could not reach server", ToastTypes.Error);
    } else {
      handleGlobalEventRef("Could not process your request", ToastTypes.Error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const catchUserAxiosFetcherError = useCallback((error: any) => {
    if (error.response) {
      const errorMessage = error.response.data?.message || "An error occurred";
      handleGlobalEventRef(errorMessage, ToastTypes.Error);
    } else if (error.request) {
      // could not reach backend server
      handleGlobalEventRef("Could not reach server", ToastTypes.Error);
    } else {
      handleGlobalEventRef("Could not process your request", ToastTypes.Error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    globalEventRef,
    handleGlobalEventRef,
    catchUserAxiosNextApiError,
    catchUserAxiosFetcherError,
  };
}
