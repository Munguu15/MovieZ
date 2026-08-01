import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroCard } from "./heroCard";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const NOW_PLAYING = "/movie/now_playing?language=en-US&page=1";

const API_KEY = "b65cbed36ce66f8c9ec12d6f69e0c789";
const BASE_URL = "https://api.themoviedb.org/3";
const popularUrl = `${BASE_URL}${NOW_PLAYING}&api_key=${API_KEY}`;
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};
export const Hero = () => {
  const [nowPlaying, setNowPlaying] = useState<any[]>([]);

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(popularUrl);
    const data = await response.json();

    setNowPlaying(data.results);
  };
  console.log("dhdahdha", nowPlaying);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
  return (
    <Carousel className="w-full h-150 ">
      <CarouselContent>
        {nowPlaying.slice(0, 5).map((item, index) => (
          <CarouselItem key={index}>
            <HeroCard movie={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
