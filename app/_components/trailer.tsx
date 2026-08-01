"use client";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Trailer = ({ trailerKey }: { trailerKey: string }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          <div className="flex items-center gap-2 bg-white/90 hover:bg-white text-black px-4 py-2.5 rounded-full font-medium text-sm transition shadow-lg">
            <Play className="w-4 h-4 fill-black" />
            <span>Play trailer</span>
            <span className="text-xs text-gray-500">2:35</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1000px] h-[563px] ">
          {trailerKey !== null && (
            <iframe
              className="w-full h-full"
              width="1100"
              height="600"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title='Gangaa ft Lhagvasuren (Haranga) - "Bratan" (Official Music Video)'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </DialogContent>
      </form>
    </Dialog>
  );
};
