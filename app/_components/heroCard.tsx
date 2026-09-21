"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Trailer } from "./trailer";
import { tmdbFetch, type Movie } from "@/lib/tmdb";

type VideosResponse = {
  results: { key: string; type: string; site: string }[];
};

export const HeroCard = ({ movie }: { movie: Movie }) => {
  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const data = await tmdbFetch<VideosResponse>(`movie/${movie.id}/videos`);
        const trailer =
          data.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) ?? data.results[0];
        setMovieTrailer(trailer?.key ?? "");
      } catch {
        setMovieTrailer("");
      }
    };

    fetchMovieTrailer();
  }, [movie.id]);

  return (
    <section className="relative h-[600px] w-full">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        className="absolute h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center pl-8 sm:pl-[140px]">
        <div className="max-w-md space-y-3">
          <p className="text-lg text-white/90">Now Playing:</p>
          <p className="text-4xl font-bold text-white">{movie.title}</p>
          <div className="flex items-center gap-2 py-2.5">
            <Image
              src="/images/star.png"
              alt="star"
              width={20}
              height={20}
              className="object-cover"
            />
            <span className="text-lg text-white">
              {movie.vote_average?.toFixed?.(1) ?? movie.vote_average}
              <span className="text-white/60">/10</span>
            </span>
          </div>
          <p className="line-clamp-4 text-xs text-white/90">{movie.overview}</p>
          {movieTrailer ? <Trailer trailerKey={movieTrailer} /> : null}
        </div>
      </div>
    </section>
  );
};
