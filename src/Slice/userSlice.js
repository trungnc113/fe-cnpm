import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/configAxios";

export const fetchInfoUser = createAsyncThunk(
  "user/fetchInfoUser",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get("/api/user/info");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOrderUser = createAsyncThunk(
  "user/fetchOrderUser",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get("/api/user/order");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchCouponUser = createAsyncThunk(
  "user/fetchCouponUser",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get("/api/user/coupon");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    information: {
      loading: false,
      info: null,
    },
    order: {
      loading: false,
      orders: [],
    },
    coupon: {
      loading: false,
      coupons: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoUser.pending, (state) => {
        state.information.loading = true;
      })
      .addCase(fetchInfoUser.fulfilled, (state, action) => {
        state.information.info = action.payload;
        state.information.loading = false;
      })
      .addCase(fetchInfoUser.rejected, (state) => {
        state.information.loading = false;
      })
      .addCase(fetchOrderUser.pending, (state) => {
        state.order.loading = true;
      })
      .addCase(fetchOrderUser.fulfilled, (state, action) => {
        state.order.orders = action.payload;
        state.order.loading = false;
      })
      .addCase(fetchOrderUser.rejected, (state) => {
        state.order.loading = false;
      })
      .addCase(fetchCouponUser.pending, (state) => {
        state.coupon.loading = true;
      })
      .addCase(fetchCouponUser.fulfilled, (state, action) => {
        state.coupon.coupons = action.payload;
        state.coupon.loading = false;
      })
      .addCase(fetchCouponUser.rejected, (state) => {
        state.coupon.loading = false;
      });
  },
});
export default userSlice.reducer;
