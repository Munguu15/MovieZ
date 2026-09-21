"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const GenreButton = ({
  genreName,
  genreId,
}: {
  genreName: string;
  genreId: number;
}) => {
  return (
    <DropdownMenuItem asChild>
      <Link
        href={`/genre/${genreId}`}
        className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted"
      >
        <span>{genreName}</span>
        <ChevronRight className="size-3.5" />
      </Link>
    </DropdownMenuItem>
  );
};
