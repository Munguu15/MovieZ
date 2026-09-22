"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageShell } from "@/app/_components/page-shell";
import { Movielist } from "@/app/_components/movieList";
import { LoadingState } from "@/app/_components/loading-state";
import { ErrorState } from "@/app/_components/error-state";
import { tmdbFetch, type Movie, type PaginatedMovies } from "@/lib/tmdb";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    if (!query) {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await tmdbFetch<PaginatedMovies>("search/movie", {
        query,
        page: 1,
        include_adult: "false",
      });
      setMovies(data.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (!query) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        Type a movie title in the header search.
      </p>
    );
  }

  if (loading) return <LoadingState label={`Searching “${query}”...`} />;
  if (error) return <ErrorState message={error} onRetry={fetchMovies} />;

  if (!movies.length) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        No results for “{query}”.
      </p>
    );
  }

  return (
    <Movielist
      movies={movies}
      genre={`Results for “${query}”`}
      seeMoreShow={false}
    />
  );
}

export default function SearchPage() {
  return (
    <PageShell wide>
      <Suspense fallback={<LoadingState label="Loading search..." />}>
        <SearchResults />
      </Suspense>
    </PageShell>
  );
}
