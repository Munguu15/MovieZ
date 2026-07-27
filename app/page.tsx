"use client";

import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Movielist } from "./_components/movielist";
import { MovieCard } from "./_components/movieCard";
import { useEffect, useState } from "react";
import { log } from "console";

const API_KEY = "b65cbed36ce66f8c9ec12d6f69e0c789";
const BASE_URL = "https://api.themoviedb.org/3";
const ENDPOINT_UPCOMING = "/movie/upcoming?language=en-US&page=1";

const apiUrl = `${BASE_URL}${ENDPOINT_UPCOMING}&api_key=${API_KEY}`;

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);

  const fetchUpcomingMovies = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setUpcomingMovies(data.results);
  };

  

  useEffect(() => {
    fetchUpcomingMovies();
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
          <Movielist genre="Popular" seeMoreShow={true} url={"/popular"} />
          <Movielist genre="Top Rated" seeMoreShow={true} url={"/toprated"} />
        </div>
      </section>
    </div>
  );
}
