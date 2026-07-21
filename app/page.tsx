"use client";

import Image from "next/image";
import React from "react";
import {ChevronDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Movielist } from "./_components/movielist";
import { MovieCard } from "./_components/movieCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <section className="flex flex-col w-[1440px] mx-auto">
        <Header/>
        <div className="flex flex-col gap-13">
        <Hero/>
        <Movielist genre="Upcoming" seeMoreShow={true} url={'/upcoming'}/>
        <Movielist genre="Popular" seeMoreShow={true} url={'/popular'}/>
        <Movielist genre="Top Rated" seeMoreShow={true}url={'/toprated'}/>
        </div>
      </section>
    </div>
  );
}
