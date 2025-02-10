import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import FeatureReducer from "../feature/FeatureSlice.jsx"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    feature: FeatureReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
