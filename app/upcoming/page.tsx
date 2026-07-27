import { Header } from "../_components/header";
import { Movielist } from "../_components/movielist";
import { PaginationMovie } from "../_components/paginationMovie";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <section className="flex flex-col w-[1440px] mx-auto gap-6 "></section>
      <Header />
      <Movielist genre="Upcoming" seeMoreShow={false} />
      <div className="flex justify-end items-center border">
        <PaginationMovie />
      </div>
    </div>
  );
}