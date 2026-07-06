import { ChevronRight } from "lucide-react"
import {movieCard} from "./movieCard"
const movies = [
    "movie1.png",
    "movie2.png",
    "movie3.png",
    "movie4.png",
    "movie5.png",
    "movie6.png",
    "movie7.png",
    "movie1.png",
    "movie1.png",
    "movie1.png",
]

export const movielist=({genre}: {genre: string } )=> { export const movieList = ({genre}: {genre: "Upcoming" | "Popular" | "Top Rated"}) => {}
    return (
        <section className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center w-full">
                <p>{genre}</p>
                    <div className="flex item-center gap-2 ">
                        <p>See more</p>
                        <ChevronRight/>
                    </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
                {movies.map((item, index) => (
                    <movieCard key={index}  />
                ))} 
            </div>
        </section>
    );
};
 