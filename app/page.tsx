"use client";

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Movielist } from "./_components/movielist";
import { MovieCard } from "./_components/movieCard";
import { useEffect, useState } from "react";

const API_KEY = "b65cbed36ce66f8c9ec12d6f69e0c789";
const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINT_UPCOMING = "/movie/upcoming?language=en-US&page=1";
const ENDPOINT_POPULAR = "/movie/popular?language=en-US&page=1";
const ENDPOINT_TOP = "/movie/top_rated?language=en-US&page=1";

const upcomingUrl = `${BASE_URL}${ENDPOINT_UPCOMING}&api_key=${API_KEY}`;
const popularUrl = `${BASE_URL}${ENDPOINT_POPULAR}&api_key=${API_KEY}`;
const topRatedUrl = `${BASE_URL}${ENDPOINT_TOP}&api_key=${API_KEY}`;

export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
};

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);

  const fetchUpcomingMovies = async () => {
    const response = await fetch(upcomingUrl);
    const data = await response.json();
    console.log(data);

    setUpcomingMovies(data.results);
  };

  const fetchPopularMovies = async () => {
    const response = await fetch(popularUrl);
    const data = await response.json();

    setPopularMovies(data.results);
  };

  const fetchTopRatedMovies = async () => {
    const response = await fetch(topRatedUrl);
    const data = await response.json();

    setTopRatedMovies(data.results);
    console.log("dada", data);
  };
  useEffect(() => {
    fetchUpcomingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      <section className="flex flex-col w-[1440px] mx-auto">
        <Header />
        <div className="flex flex-col gap-13">
          <Hero />
          <Movielist
            movies={upcomingMovies}
            genre="Upcoming"
            seeMoreShow={true}
            url={"/upcoming"}
          />
          <Movielist
            genre="Popular"
            seeMoreShow={true}
            url={"/popular"}
            movies={popularMovies}
          />
          <Movielist
            movies={topRatedMovies}
            genre="Top Rated"
            seeMoreShow={true}
            url={"/toprated"}
          />
        </div>
      </section>
    </div>
  );
}
