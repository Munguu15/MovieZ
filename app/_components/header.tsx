
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, } from "lucide-react";
import React from "react";
import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
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
            <div>
                <InputGroup className="max-w-xs border rounded-lg flex flex-row h-9 w-[379px]">
                  <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                       <Search />
                    </InputGroupAddon>
                  <InputGroupAddon align="inline-end"></InputGroupAddon>
                </InputGroup>
                
            </div>
          </div>
          <div className="flex items-center justify-center p-2.5 rounded-lg border-gray-300">
            <Image src="/images/moon.png" alt="moon" width={36} height={36} />
          </div>
        </header>
    )
}