import { configureStore } from '@reduxjs/toolkit';
import withdrawMoneyReducer from './features/WithdrawMoneyInfoSlice';
import depositMoneyReducer from './features/DepositMoneyInfoSlice';

export const store = configureStore({
  reducer: {
    withdrawMoney: withdrawMoneyReducer,
    depositMoney: depositMoneyReducer
  },
});

export default store;