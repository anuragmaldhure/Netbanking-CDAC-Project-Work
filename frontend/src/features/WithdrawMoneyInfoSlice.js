// import { createSlice } from '@reduxjs/toolkit';

// export const withdrawMoneySlice = createSlice({
//   name: 'withdrawMoney',
//   initialState: {
//     amount: "",
//     confirmAmount: "",
//     remarks: ""
//   },
//   reducers: {
//     updateWithdrawMoney: (state, action) => {
//       return { ...state, ...action.payload };
//     }
//   }
// });

// export const { updateWithdrawMoney } = withdrawMoneySlice.actions;

// export default withdrawMoneySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const withdrawMoneySlice = createSlice({
  name: 'withdrawMoney',
  initialState: {
    amount: '',
    confirmAmount: '',
    remarks: '',
  },
  reducers: {
    updateWithdrawMoney: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateWithdrawMoney } = withdrawMoneySlice.actions;

export default withdrawMoneySlice.reducer;

