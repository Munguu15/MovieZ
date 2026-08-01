import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Trailer } from "./trailer";

const API_KEY = "b65cbed36ce66f8c9ec12d6f69e0c789";
const BASE_URL = "https://api.themoviedb.org/3";

type GenreType = {
  name: string;
  id: string;
};
type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  genres: GenreType[];
  vote_average: number;
  vote_count: number;
};
export const HeroCard = ({ movie }: { movie: MovieType }) => {
  const [movieTrailer, setMovieTrailer] = useState<string>("");
  const movieTrailerUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US&api_key=${API_KEY}`;

  const fetchMovieTrailer = async () => {
    const response = await fetch(movieTrailerUrl);
    const data = await response.json();

    setMovieTrailer(data.results[0].key);
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
  return (
    <section className="w-full relative h-[600px] ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="Property"
        fill
        className=" w-full h-full object-cover  absolute"
      />

      <div className="w-full h-full flex z-10 relative items-center pl-[140px]">
        <div>
          <p className="text-white text-lg">Now Playing:</p>
          <p className="text-white text-4xl font-bold">{movie.title}</p>
          <div className="flex items-center gap-2 py-2.5 ">
            <Image
              src={"/images/star.png"}
              alt="star"
              width={20}
              height={20}
              className=" object-cover"
            />
            <span className="text-white text-lg">
              {movie.vote_average}
              <span className="text-gray-500">/10</span>
            </span>
          </div>
          <p className="text-white text-xs w-[300px]">{movie.overview}</p>
          <Trailer trailerKey={movieTrailer} />
        </div>
      </div>
    </section>
  );
};
