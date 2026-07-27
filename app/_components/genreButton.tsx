import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const GenreButton = ({genreName}: {genreName: string}) => {
    return (
        <Button className="flex gap-2 items-center " variant={"outline"} >
            <span>{genreName}</span>
            <ChevronRight/>
        </Button>
    );
};