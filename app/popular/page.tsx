"use client";
import { Header } from "../_components/header";
import { Movielist } from "../_components/movielist";
import { PaginationMovie } from "../_components/paginationMovie";
import { useEffect, useState } from "react";

const ENDPOINT_POPULAR = "/movie/popular?language=en-US&page=1";

const API_KEY = "b65cbed36ce66f8c9ec12d6f69e0c789";
const BASE_URL = "https://api.themoviedb.org/3";
const popularUrl = `${BASE_URL}${ENDPOINT_POPULAR}&api_key=${API_KEY}`;
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};
export default function Home() {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  const fetchPopularMovies = async () => {
    const response = await fetch(popularUrl);
    const data = await response.json();

    setPopularMovies(data.results);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return (
    <div className="flex flex-col w-full h-screen">
      <section className="flex flex-col w-[1440px] mx-auto gap-6 ">
        <Header />
        <Movielist
          url={"/popular"}
          movies={popularMovies}
          genre="Popular"
          seeMoreShow={false}
        />
        <div className="flex justify-end items-center border">
          <PaginationMovie />
        </div>
      </section>
    </div>
  );
}
