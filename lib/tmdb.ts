export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count?: number;
  overview: string;
  genre_ids?: number[];
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = Movie & {
  genres: Genre[];
  runtime?: number;
};

export type PaginatedMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const TMDB_GENRES: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export async function tmdbFetch<T>(
  path: string,
  searchParams: Record<string, string | number | undefined> = {},
): Promise<T> {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value !== undefined && value !== "") {
      params.set(key, String(value));
    }
  }

  const query = params.toString();
  const url = `/api/tmdb/${path.replace(/^\//, "")}${query ? `?${query}` : ""}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `TMDB request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}
