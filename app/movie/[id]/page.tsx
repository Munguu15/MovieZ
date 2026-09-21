"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/app/_components/page-shell";
import { Trailer } from "@/app/_components/trailer";
import { LoadingState } from "@/app/_components/loading-state";
import { ErrorState } from "@/app/_components/error-state";
import {
  tmdbFetch,
  type MovieDetails,
} from "@/lib/tmdb";

type VideosResponse = {
  results: { key: string; type: string; site: string }[];
};

export default function MovieDetailsPage() {
  const { id } = useParams();
  const movieId = String(id ?? "");

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [movieTrailer, setMovieTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovie = useCallback(async () => {
    if (!movieId) {
      setError("Invalid movie id");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const [details, videos] = await Promise.all([
        tmdbFetch<MovieDetails>(`movie/${movieId}`),
        tmdbFetch<VideosResponse>(`movie/${movieId}/videos`),
      ]);

      setMovieDetails(details);
      const trailer =
        videos.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        ) ?? videos.results[0];
      setMovieTrailer(trailer?.key ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load movie");
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <PageShell>
      {loading ? (
        <LoadingState label="Loading movie details..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchMovie} />
      ) : movieDetails ? (
        <div className="space-y-6">
          <div className="flex w-full flex-row items-start justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                {movieDetails.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {movieDetails.release_date}
                {movieDetails.runtime
                  ? ` · ${movieDetails.runtime} min`
                  : null}
              </p>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-xs font-medium text-muted-foreground">
                Rating
              </span>
              <div className="mt-0.5 flex items-center gap-1.5">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-bold text-foreground">
                  {movieDetails.vote_average?.toFixed?.(1) ??
                    movieDetails.vote_average}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {movieDetails.vote_count?.toLocaleString()} votes
              </span>
            </div>
          </div>

          <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-3 md:h-[420px]">
            <div className="relative h-[420px] overflow-hidden rounded-lg bg-muted md:col-span-1 md:h-full">
              {movieDetails.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
            </div>
            <div className="group relative h-[420px] overflow-hidden rounded-lg bg-muted md:col-span-2 md:h-full">
              {movieDetails.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 flex items-end bg-black/20 p-6">
                {movieTrailer ? <Trailer trailerKey={movieTrailer} /> : null}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-wrap justify-start gap-2">
              {movieDetails.genres?.map((genre) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              {movieDetails.overview}
            </p>
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}
