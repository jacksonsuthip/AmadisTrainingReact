import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        todoArr: todoSlice,
    },
});

export default store;