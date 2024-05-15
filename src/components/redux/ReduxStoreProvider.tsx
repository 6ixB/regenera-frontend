"use client";

import { AppStore, makeStore } from "@/lib/state/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
