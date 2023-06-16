import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: Math.random(),
        task: "Learn Redux Toolkit",
        isDone: false,
        isEdited: false,
      },
    ],
    FilterItems: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    editTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, completeTodo, editTodo, updateTodo } =
  todoSlice.actions;
