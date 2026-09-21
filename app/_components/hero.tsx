"use client";

import { useEffect, useState } from "react";
import { LoadingState } from "./loading-state";
import { ErrorState } from "./error-state";
import { tmdbFetch, type Movie, type PaginatedMovies } from "@/lib/tmdb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroCard } from "./heroCard";

export const Hero = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNowPlayingMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await tmdbFetch<PaginatedMovies>("movie/now_playing", {
        page: 1,
      });
      setNowPlaying(data.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load hero");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  if (loading) return <LoadingState label="Loading now playing..." />;
  if (error) return <ErrorState message={error} onRetry={fetchNowPlayingMovies} />;
  if (!nowPlaying.length) return null;

  return (
    <Carousel className="h-150 w-full">
      <CarouselContent>
        {nowPlaying.slice(0, 5).map((item) => (
          <CarouselItem key={item.id}>
            <HeroCard movie={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
