"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PageShell } from "@/app/_components/page-shell";
import { Movielist } from "@/app/_components/movieList";
import { LoadingState } from "@/app/_components/loading-state";
import { ErrorState } from "@/app/_components/error-state";
import {
  TMDB_GENRES,
  tmdbFetch,
  type Movie,
  type PaginatedMovies,
} from "@/lib/tmdb";

export default function GenrePage() {
  const params = useParams();
  const genreId = Number(params.id);
  const genreName =
    TMDB_GENRES.find((genre) => genre.id === genreId)?.name ?? "Genre";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    if (!genreId) {
      setError("Invalid genre");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await tmdbFetch<PaginatedMovies>("discover/movie", {
        with_genres: genreId,
        sort_by: "popularity.desc",
        page: 1,
      });
      setMovies(data.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load genre");
    } finally {
      setLoading(false);
    }
  }, [genreId]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <PageShell wide>
      {loading ? (
        <LoadingState label={`Loading ${genreName} movies...`} />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchMovies} />
      ) : (
        <Movielist
          movies={movies}
          genre={genreName}
          seeMoreShow={false}
        />
      )}
    </PageShell>
  );
}
