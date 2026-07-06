import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="w-full relative h-[600px]">
      <Image
        src="/images/Feature.png"
        alt="Property"
        fill
        className="object-cover w-full h-full absolute"
      />
      <div className="w-full h-full flex z-10 relative items-center pl-[14px]">
        <div>
          <p className="text-white text-lg">Now Playing:</p>
          <p className="text-white text-4xl font-bold">Wicked</p>
          <div className="flex items-center gap-2 py-2.5 ">
            <Image src={"/star.png"} alt="star" width={20} height={20} />
            <span className="text-white text-lg">
              8.5<span className="text-gray-500">/10</span>
            </span>
          </div>
          <p className="text-white text-xs w-[300px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
          <Button className="flex items-center gap-2 py-2.5 bg-white text-black rounded-lg ">
            <Image src={"/Play.png"}
                    alt="play"
                    width={20}
                    height={20}
            />  
            <span>Watch Trailer</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
