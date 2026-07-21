import { ChevronRight, Link } from "lucide-react";
import { MovieCard } from "./movieCard";
const movies = [
  {
    id: 1,
    name: "Dear santa",
    image: "/images/movie1.png",
    rating: 8.5,
  },
  {
    id: 2,
    name: "Dear santa",
    image: "/movie2.png",
    rating: 8.5,
  },
  {
    id: 3,
    name: "Dear santa",
    image: "/movie3.png",
    rating: 8.5,
  },
  {
    id: 4,
    name: "Dear santa",
    image: "/movie4.png",
    rating: 8.5,
  },
  {
    id: 5,
    name: "Dear santa",
    image: "/movie5.png",
    rating: 8.5,
  },
];

export const Movielist = ({
  genre,
  seeMoreShow,
  url,
}: {
  genre: string;
  seeMoreShow: boolean;
  url?: string;
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
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            movieName={item.name}
            image={item.image}
            rating={item.rating}
          />
        ))}
        ;
      </div>
    </section>
  );
};
