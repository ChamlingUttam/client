import { createSlice } from "@reduxjs/toolkit";

type cartCount ={
    count:number
}

const initialState:cartCount={
    count:0
}

export const cartCountSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1
        },
          decrement:(state)=>{
        state.count -=1
    }
    }
  
})

export const {increment,decrement} = cartCountSlice.actions
export default cartCountSlice.reducer