import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreButton } from "./genreButton";
import Link from "next/link";

const data = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-show",
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-20 py-3 border">
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="py-2"
        />
      </Link>

      <div className="flex items-center gap-3 ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div>
              <span>
                <ChevronDown />
              </span>
              Genre
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[577px] h-[333px] p-5"
            align="start"
          >
            <div className="flex flex-col gap-2 ">
              <p className="text-2xl font-bold">Genres</p>
              <p>See lists of movies by genre</p>
            </div>

            <DropdownMenuSeparator />
            <div className="flex gap-4 flex-wrap ">
              {data.map((item, index) => {
                return <GenreButton genreName={item} />;
              })}
              <div>
                Action <ChevronRight />
              </div>{" "}
            </div>

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
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
      <div className="flex items-center justify-center p-2.5 rounded-lg border border-gray-300">
        <Image src="/images/moon.png" alt="moon" width={36} height={36} />
      </div>
    </header>
  );
};
