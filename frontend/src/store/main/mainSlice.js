/* eslint-disable import/no-extraneous-dependencies */
import {
  createSlice,
  createAsyncThunk,
  //   createAction,
  // ,createAsyncThunk,
} from '@reduxjs/toolkit';

import { getMainMessage, postMainMessage } from './mainService';
// import brandService from "./brandService";

const initialState = {
  main: ``,
  isLoading: true,
  isSuccess: false,
  isError: false,
  msgIsSet: false,
  message: '',
};

// export const countBrands = createAsyncThunk(
//   "brands/countBrands",
//   async (arg, thunkAPI) => {
//     const { getState, dispatch } = thunkAPI;

//     try {
//       let limit = getState().brands.limit;
//       let offset = getState().brands.offset;
//       let keyword = getState().brands.keyword;

//       dispatch(getBrands({ offset, limit, keyword }));

//       const brandsCount = await brandService.countBrands();
//       return brandsCount;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const getMain = createAsyncThunk('main/getMain', async (_, thunkAPI) => {
  try {
    const main = await getMainMessage();
    return main;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const setMainThunk = createAsyncThunk('main/setMain', async (args, thunkAPI) => {
  try {
    const main = await postMainMessage(args);
    return main;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// export const resetState = createAction('Reset_all');

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMain: (state, action) => {
      state.main = action.payload;
    },
    setIsSet: (state, action) => {
        state.msgIsSet = action.payload;
      },
    //   addListItem: (state, action) => {
    //     state.list.push(action.payload);
    //   },
    //   getMain: (state, action) => {
    //     const { id, body, reply } = action.payload;
    //     state.list = state.list.map((ele) => (ele.id === id ? { ...ele, body, reply } : ele));
    //   },
  },
  //   ,
  extraReducers: (builder) => {
    builder
      .addCase(getMain.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getMain.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.main = action?.payload?.main ? action?.payload?.main : `err`;
      })
      .addCase(getMain.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(setMainThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.msgIsSet = false;
      })
      .addCase(setMainThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.msgIsSet = true;
        state.main = action?.payload?.main ? action?.payload?.main : `err`;
      })
      .addCase(setMainThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.msgIsSet = false;

        state.message = action.error;
      });
  },
});

export default mainSlice.reducer;
export const { setMain , setIsSet } = mainSlice.actions;
