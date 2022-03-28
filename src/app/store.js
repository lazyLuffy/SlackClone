import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../features/appSlice';
// import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
      apps: appSlice,
  },
});
