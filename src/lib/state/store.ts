import { configureStore } from "@reduxjs/toolkit";
import { regeneraApi } from "./services/auth.service";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
  const store = configureStore({
    reducer: { [regeneraApi.reducerPath]: regeneraApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(regeneraApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
