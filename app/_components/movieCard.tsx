// import Image from "next/image";
// export const MovieCard =
//   ({ movieName }: { movieName: string; image: string; rating: number }) =>
//   ({
//     movieName,
//     image,
//     rating,
//   }: {
//     movieName: string;
//     image: string;
//     rating: number;
//   }) => {
//     return (
//       <div className="flex flex-col gap-2 w-[230px] h-[440px]">
//         <Image
//           src={image}
//           alt="movie1"
//           width={200}
//           height={200}
//           className="w-full h-[340px] object-cover"
//         />
//         <div className="flex flex-col p-2 h-full ">
//           <div className="flex items-center gap-2 py-2.5">
//             <Image src={"/images/Star.png"} alt="star" width={20} height={20} />
//             <span className="text-white text-lg">
//               {rating} <span className="text-gray-500">/10</span>{" "}
//             </span>
//           </div>
//           <div>{movieName}</div>
//         </div>
//       </div>
//     );
//   };
import { Images } from "lucide-react";
import Image from "next/image";

interface MovieCardProps {
  movieName: string;
  image: string;
  rating: string;
}

export const MovieCard = ({ movieName, image, rating }: MovieCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-[230px] h-[440px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={movieName}
        width={200}
        height={200}
        className="w-full h-[340px] object-cover"
      />
      <div className="flex flex-col p-2 h-full">
        <div className="flex items-center gap-2 py-2.5">
          <Image src="/images/Star.png" alt="star" width={20} height={20} />
          <span className="text-black text-lg">
            {rating} <span className="text-gray-500">/10</span>
          </span>
        </div>
        <div>{movieName}</div>
      </div>
    </div>
  );
};
