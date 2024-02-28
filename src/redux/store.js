import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import crudSlice from "./slices/crudSlice";

//configureStore-createStore farklari
//1-Varsayilan olarak thunk kurulu gelir
//2- Verilen reducer lari otomatik olarak birlestirir

export default configureStore({
  reducer: { counterSlice, crudSlice },
});
