"use client";

import { useCallback, useEffect, useState } from "react";
import { PageShell } from "../_components/page-shell";
import { Movielist } from "../_components/movieList";
import { PaginationMovie } from "../_components/paginationMovie";
import { LoadingState } from "../_components/loading-state";
import { ErrorState } from "../_components/error-state";
import { tmdbFetch, type Movie, type PaginatedMovies } from "@/lib/tmdb";

export default function PopularPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await tmdbFetch<PaginatedMovies>("movie/popular", {
        page: 1,
      });
      setMovies(data.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load popular");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <PageShell wide>
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchMovies} />
      ) : (
        <>
          <Movielist
            movies={movies}
            genre="Popular"
            url="/popular"
            seeMoreShow={false}
          />
          <div className="flex items-center justify-end border-t border-border pt-4">
            <PaginationMovie />
          </div>
        </>
      )}
    </PageShell>
  );
}
