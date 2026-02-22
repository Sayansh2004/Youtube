import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        showSideBar:true,
        
    },
    reducers:{
        decider:(state)=>{
            state.showSideBar=!state.showSideBar;
        },
        closeMenu:(state)=>{
            state.showSideBar=false;
        }
    }
})

export const{decider,closeMenu}=appSlice.actions;
export default appSlice.reducer;