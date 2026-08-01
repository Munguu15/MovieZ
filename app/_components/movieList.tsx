import { ChevronRight, Link } from "lucide-react";
import { MovieCard } from "./movieCard";

type MovieType = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: string;

};

export const Movielist = ({
  genre,
  seeMoreShow,
  url,
  movies,
}: {
  genre: string;
  seeMoreShow: boolean;
  url?: string;
  movies: MovieType[];
}) => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center w-full">
        <p>{genre}</p>
        {seeMoreShow && (
          <div className="flex item-center gap-2 ">
            <a href={url}>See more</a>

            <ChevronRight />
          </div>
        )}
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies?.slice(0, 10)?.map((item) => (
          <MovieCard
            key={item.id}
            movieName={item.title}
            image={item.poster_path}
            rating={item.vote_average}
            id={item.id}
          />
        ))}
        ;
      </div>
    </section>
  );
};
