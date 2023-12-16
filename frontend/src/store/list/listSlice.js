/* eslint-disable import/no-extraneous-dependencies */
import {
  createSlice,
  //   createAction,
  // ,createAsyncThunk,
} from '@reduxjs/toolkit';
// import brandService from "./brandService";

const initialState = {
  list: [],
  isLoading: true,
  isSuccess: false,
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

// export const getBrands = createAsyncThunk(
//   "brands/getBrands",
//   async (args, thunkAPI) => {
//     try {
//       const brands = await brandService.getBrands(args);
//       return brands;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const resetState = createAction('Reset_all');

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addListItem: (state, action) => {
      state.list.push(action.payload);
    },
    editListItem: (state, action) => {
      const { id, body, reply } = action.payload;
      state.list = state.list.map((ele) => (ele.id === id ? { ...ele, body, reply } : ele));
    },
    deleteListItem: (state, action) => {
      state.list = state.list.filter((s) => s?.id !== action?.payload);
    },
  },
  //   ,
  //   extraReducers: (builder) => {
  //     builder.addCase(getBrands.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.isSuccess = false;
  //     });
  //   },
});

export default listSlice.reducer;
export const { setList, addListItem, deleteListItem , editListItem } = listSlice.actions;
