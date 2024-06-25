"use client"

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./button-actionsnav";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";



const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect (()=>{
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="cursor-default flex items-center rounded-full px-4 py-2">
        <ShoppingBag className="cursor-pointer" onClick={()=> router.push("/cart")} size={20} color="black" />
        <span className="ml-1 text-sm font-medium text-black relative -mt-7">{cart.items.length}</span>
    </Button>
    </div>
  )
}

export default NavbarActions;
