import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MovieCard } from "./movieCard";
import type { Movie } from "@/lib/tmdb";

export const Movielist = ({
  genre,
  seeMoreShow,
  url,
  movies,
}: {
  genre: string;
  seeMoreShow: boolean;
  url?: string;
  movies: Movie[];
}) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-xl font-semibold text-foreground">{genre}</p>
        {seeMoreShow && url && (
          <Link
            href={url}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            See more
            <ChevronRight className="size-4" />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {movies?.slice(0, 10)?.map((item) => (
          <MovieCard
            key={item.id}
            movieName={item.title}
            image={item.poster_path}
            rating={String(item.vote_average?.toFixed?.(1) ?? item.vote_average)}
            id={String(item.id)}
          />
        ))}
      </div>
    </section>
  );
};
