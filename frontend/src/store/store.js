/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from "@reduxjs/toolkit"; 

import mainSlice from "./main/mainSlice";
import listReducer from "./list/listSlice";

 
export const store = configureStore({
  reducer: {
    list: listReducer,
    main: mainSlice,
   
  },
});
