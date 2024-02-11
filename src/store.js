import { configureStore } from '@reduxjs/toolkit';
import withdrawMoneyReducer from './features/WithdrawMoneyInfoSlice';

export const store = configureStore({
  reducer: {
    withdrawMoney: withdrawMoneyReducer,
  },
});

export default store;