"use client"

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./button-actionsnav";



const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect (()=>{
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full px-4 py-2">
        <ShoppingBag size={20} color="black" />
        <span className="ml-1 text-sm font-medium text-black relative -mt-7">0</span>
    </Button>
    </div>
  )
}

export default NavbarActions;
