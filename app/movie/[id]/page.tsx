"use client";
import { Star } from "lucide-react";
import { Header } from "@/app/_components/header";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Trailer } from "@/app/_components/trailer";

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

export default function Home() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieType | null>(null);
  const [movieTrailer, setMovieTrailer] = useState<string>("");
  const apiUrl = `${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`;
  const movieTrailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`;

  const fetchMovieDetails = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("hahehehehohoha", data);

    setMovieDetails(data);
  };
  const fetchMovieTrailer = async () => {
    const response = await fetch(movieTrailerUrl);
    const data = await response.json();
    console.log("movieTrailer", data);

    setMovieTrailer(data.results[0].key);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieTrailer();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black w-full px-8 py-6 max-w-[1280px] mx-auto space-y-6">
      <div className="min-h-screen bg-white text-black px-8 py-6 max-w-7xl mx-auto space-y-6">
        <Header />

        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight">
              {movieDetails?.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {movieDetails?.release_date}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400 font-medium">Rating</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-lg">
                {movieDetails?.vote_average}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {movieDetails?.vote_count}
            </span>
          </div>
        </div>
        <div className=" flex-row grid grid-cols-1 md:grid-cols-3 gap-4 h-[420px]">
          <div className="md:col-span-1 relative rounded-lg overflow-hidden bg-gray-100 h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 relative rounded-lg overflow-hidden bg-gray-100 h-full group">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`}
              width={400}
              height={400}
              alt={movieDetails?.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <Trailer trailerKey={movieTrailer} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-wrap justify-start gap-2">
            {movieDetails?.genres?.map((item) => {
              return <Badge key={item.id}>{item.name}</Badge>;
            })}
          </div>
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            {movieDetails?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
