/* 
Hem reducer`lari hem aksiyonları farklı dosyalarda 
oluşturmak yerine slice yapısı oluşturarak ikisini de tek noktada tanımlayabiliyoruz.

? Slice Olusturma
1) import createSlice 
2) gerekli parametreleri tanımlama
- - name: slice ismi "string"
- - initialState: başlangıç state'i
3) reducers : aksiyonların görevini tanımladığımız fonksiyonlar

*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //slice ismi
  initialState: { count: 0, is_dark_theme: true },
  //state'in nasıl değişeceğine karar veren fonksiyonlar
  // reducer/aksiyon fonksiyonları
  // bütün aksiyon fonksiyonları iki parametre alır
  // 1- state'ın son hali
  // 2- aksiyon objesi
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count !== 0 && state.count--;
    },
    set_count: (state, action) => {
      state.count = action.payload;
    },

    changeTheme: (state) => {
      state.is_dark_theme = !state.is_dark_theme;
    },

    //payloadi kullanacaksak ikinci parametreye aksiyonu aliriz
  },
});

export default counterSlice.reducer;

export const { increase, decrease, set_count, changeTheme } =
  counterSlice.actions;
