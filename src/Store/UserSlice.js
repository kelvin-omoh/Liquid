import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"user",
    initialState: {state:[]},
    reducers:{
        addUser(state,action){
          const Updated=action.payload
          state.state.push(Updated)
        }
    }
})
export const userSliceAction=userSlice.actions
export default userSlice