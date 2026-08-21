"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState, store } from "../store/store";

const ShoppingCart = () => {
  
const cartCounts = useSelector((state:RootState)=>
  state.cart.items.reduce((total,item)=>total + item.quantity,0))

  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cartCounts}
      </span>
    </Link>
  );
};

export default ShoppingCart;