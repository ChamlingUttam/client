"use client"
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Product {
    id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

type cartItem = Product & {
    quantity:number

}

type cartState = {
    items : cartItem[]
}

const initialState :cartState={
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToChart :(state,action:PayloadAction<Product>)=>{
            const existingItem = state.items.find((item)=>
            item.id === action.payload.id
            )

            if(existingItem){
                existingItem.quantity +=1
            }else{
                state.items.push({
                    ...action.payload,
                    quantity = 1
                })
            }
            
        },

        removeCart:(state,action:PayloadAction<string|number>)=>{
            state.items.filter((item)=>
            item.id != action.payload
            )
        }

    }

    
})



export const {
    addToChart
} = cartSlice.actions

export default cartSlice.reducer