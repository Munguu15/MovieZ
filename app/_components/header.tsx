"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenreButton } from "./genreButton";
import { ThemeToggle } from "./theme-toggle";
import { TMDB_GENRES } from "@/lib/tmdb";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSearch = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-border bg-background py-3 text-foreground sm:px-4">
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="py-2"
        />
      </Link>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted">
            <ChevronDown className="size-4" />
            Genre
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="max-h-[360px] w-[min(577px,90vw)] overflow-y-auto p-5"
            align="start"
          >
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">Genres</p>
              <p className="text-sm text-muted-foreground">
                See lists of movies by genre
              </p>
            </div>

            <DropdownMenuSeparator />
            <div className="flex flex-wrap gap-2">
              {TMDB_GENRES.map((genre) => (
                <GenreButton
                  key={genre.id}
                  genreId={genre.id}
                  genreName={genre.name}
                />
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <form onSubmit={onSearch} className="w-full max-w-[379px]">
          <InputGroup className="flex h-9 w-full flex-row rounded-lg border">
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </InputGroup>
        </form>
      </div>

      <ThemeToggle />
    </header>
  );
};
