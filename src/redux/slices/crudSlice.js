import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "asda123",
      title: "Navbar animasyon",
      author: "ahmet",
      assigned_to: "mehmet",
      end_date: "2024-01-01",
    },
    {
      id: "ghff",
      title: "Footer animasyon",
      author: "ali",
      assigned_to: "ayse",
      end_date: "2024-01-05",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      const i = state.tasks.findIndex((t) => t.id === action.payload);
      state.tasks.splice(i, 1);
    },
    editTask: (state, action) => {
      const i = state.tasks.findIndex((t) => t.id === action.payload.id);

      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = crudSlice.actions;

export default crudSlice.reducer;
