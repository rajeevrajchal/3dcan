/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactElement, useContext, useState } from "react";
import { $FIX_ME } from "../types/fix_me";

const appContext = createContext<$FIX_ME>({});

const { Provider } = appContext;

const useAppData = () => {
  const [showAction, setShowAction] = useState<string | null>(null);
  const [selectTexture, setSelectTexture] = useState<
    "original" | "video" | "static"
  >("original");

  return {
    showAction,
    selectTexture,
    setShowAction,
    setSelectTexture,
  };
};

export function AppProvider({ children }: { children: ReactElement }) {
  const data = useAppData();
  return <Provider value={data}>{children}</Provider>;
}

const useApp = () => useContext(appContext);

export default useApp;
