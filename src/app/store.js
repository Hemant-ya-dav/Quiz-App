import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detailSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

// const detailedReducer = persistReducer(persistConfig, detailReducer);

export const store = configureStore({
  reducer: {
    detail: detailReducer,
  },
});

// export const persistor = persistStore(store);
