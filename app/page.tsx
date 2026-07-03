"use client";

import Image from "next/image";
import React from "react";
import {ChevronDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <section className="flex flex-col w-[2080px] mx-auto">
        <header className="flex justify-between items-center w-full px-20 py-3 border">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} className="py-2"/>
          <div className="flex items-center gap-3 ">
            <Button variant="outline">
                {" "}
                <span><ChevronDown /> 
                </span>Genre
            </Button>
            <div className="flex items-center gap-2.5 border-gray-300  rounded-lg px-2 h-9">
                <Image src="/images/search.png" alt="avatar" width={16} height={16} />
                <Input type="text" placeholder="Search" className="border-none" />
            </div>
          </div>
          <div className="flex items-center justify-center p-2.5 rounded-lg border-gray-300">
            <Image src="/images/moon.png" alt="moon" width={20} height={20} />
          </div>
        </header>
      </section>
    </div>
  );
}
