
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, } from "lucide-react";
import React from "react";

export const Header=() =>{
    return (
      <header className="flex justify-between items-center w-full px-20 py-3 border">
           
          <Image src="/images/logo.png" alt="logo" width={100} height={100} className="py-2"/>
          <div className="flex items-center gap-3 ">
            <Button variant="outline">
                {" "}
                <span><ChevronDown /> 
                </span>Genre
            </Button>
            <div className="border rounded-lg flex flex-row h-9 w-[379px]">
                <Image
                src="/images/search.png" 
                alt="search" 
                width={24} 
                height={24}
                className="pl-3.5 object-contain absolute top-6" />
                <Input type="text" placeholder="Search" 
                className="border-none outline-hidden h-full w-full pl-10 z-10"
                 />
            </div>
          </div>
          <div className="flex items-center justify-center p-2.5 rounded-lg border-gray-300">
            <Image src="/images/moon.png" alt="moon" width={20} height={20} />
          </div>
        </header>
    )
}