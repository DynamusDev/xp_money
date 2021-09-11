import React, { createContext, ReactChild, useCallback, useState } from "react";
import { toast, StyledToastContainer } from "../components/Toast";

interface FeedbackContextProps {
  openToast(props: { title: string; isError: boolean }): void;
}

export const FeedbackContext = createContext<FeedbackContextProps>({
  openToast: (props: { title: string; isError: boolean }) => {},
});

export interface FeedbackProviderInterface {
  children: ReactChild;
}

export function FeedbackProvider(props: FeedbackProviderInterface) {
  const openToast = useCallback(
    async (props: { title: string; isError: boolean }) => {
      if (props.isError) {
        toast.error(props.title);
        return;
      }
      toast.success(props.title);
    },
    []
  );

  return (
    <FeedbackContext.Provider
      value={{
        openToast,
      }}
    >
      <>
        {props.children}
        <StyledToastContainer />
      </>
    </FeedbackContext.Provider>
  );
}

export interface BottomSheetOrDialogWrappedComponentProps {
  onClose(): void;
}
