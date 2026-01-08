import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from '../services/api-slice'; // RTK Query base API
import counterReducer from '../features/counter/counter-slice';
// Import other feature reducers here...

// 1. Combine reducers to easily extract the RootState type later
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  counter: counterReducer,
  // Add other features here
});

// 2. Configure the store
export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling, and other useful features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

// 3. Optional: setupListeners is required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// 4. Infer types from the store itself for robust TypeScript support
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
