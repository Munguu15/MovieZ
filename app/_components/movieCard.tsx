import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  movieName: string;
  image: string;
  rating: string;
  id: string;
}

export const MovieCard = ({ movieName, image, rating, id }: MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="flex h-[440px] w-[230px] flex-col gap-2 overflow-hidden rounded-lg bg-muted/40">
        {image ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={movieName}
            width={200}
            height={200}
            className="h-[340px] w-full object-cover"
          />
        ) : (
          <div className="flex h-[340px] w-full items-center justify-center bg-muted text-sm text-muted-foreground">
            No poster
          </div>
        )}
        <div className="flex h-full flex-col p-2">
          <div className="flex items-center gap-2 py-2.5">
            <Image src="/images/Star.png" alt="star" width={20} height={20} />
            <span className="text-lg text-foreground">
              {rating} <span className="text-muted-foreground">/10</span>
            </span>
          </div>
          <div className="line-clamp-2 text-foreground">{movieName}</div>
        </div>
      </div>
    </Link>
  );
};
