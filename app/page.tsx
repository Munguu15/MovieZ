"use client";

import { useCallback, useEffect, useState } from "react";
import { Hero } from "./_components/hero";
import { Movielist } from "./_components/movieList";
import { PageShell } from "./_components/page-shell";
import { LoadingState } from "./_components/loading-state";
import { ErrorState } from "./_components/error-state";
import { tmdbFetch, type Movie, type PaginatedMovies } from "@/lib/tmdb";

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHomeMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [upcoming, popular, topRated] = await Promise.all([
        tmdbFetch<PaginatedMovies>("movie/upcoming", { page: 1 }),
        tmdbFetch<PaginatedMovies>("movie/popular", { page: 1 }),
        tmdbFetch<PaginatedMovies>("movie/top_rated", { page: 1 }),
      ]);
      setUpcomingMovies(upcoming.results ?? []);
      setPopularMovies(popular.results ?? []);
      setTopRatedMovies(topRated.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load movies");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHomeMovies();
  }, [fetchHomeMovies]);

  return (
    <PageShell wide>
      <div className="flex flex-col gap-13">
        <Hero />
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchHomeMovies} />
        ) : (
          <>
            <Movielist
              movies={upcomingMovies}
              genre="Upcoming"
              seeMoreShow
              url="/upcoming"
            />
            <Movielist
              movies={popularMovies}
              genre="Popular"
              seeMoreShow
              url="/popular"
            />
            <Movielist
              movies={topRatedMovies}
              genre="Top Rated"
              seeMoreShow
              url="/toprated"
            />
          </>
        )}
      </div>
    </PageShell>
  );
}
