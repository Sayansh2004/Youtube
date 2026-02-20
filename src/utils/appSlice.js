import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        showSideBar:true
    },
    reducers:{
        decider:(state)=>{
            state.showSideBar=!state.showSideBar;
        }
    }
})

export const{decider}=appSlice.actions;
export default appSlice.reducer;