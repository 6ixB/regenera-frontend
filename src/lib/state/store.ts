import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import updateUserProfileDtoReducer from "./features/users/updateUserProfileSlice";
import searchReducer from "./features/search/searchSlice";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      search: searchReducer,
      updateUserProfileDto: updateUserProfileDtoReducer,
    },
  });

  setupListeners(store.dispatch);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
