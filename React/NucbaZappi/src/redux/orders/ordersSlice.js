const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  orders: null,
  error: null,
  loading: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    fetchOrdersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrdersFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchOrdersStart: state => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: state => {
      return {
        ...state,
        error: null,
      };
    },
    clearOrders: state => {
      return {
        ...state,
        orders: null,
      };
    },
    createOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const {
  fetchOrdersSuccess,
  fetchOrdersFail,
  fetchOrdersStart,
  clearError,
  clearOrders,
  createOrderFail,
} = ordersSlice.actions;

export default ordersSlice.reducer;
