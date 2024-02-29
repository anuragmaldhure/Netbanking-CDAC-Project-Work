import { createSlice } from '@reduxjs/toolkit';

export const depositMoneySlice = createSlice({
  name: 'depositMoney',
  initialState: {
    customerAccountNumber: '',
    amount: '',
    confirmAmount: '',
    remarks: '',
  },
  reducers: {
    updateDepositMoney: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateDepositMoney } = depositMoneySlice.actions;

export default depositMoneySlice.reducer;