import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useEffect, useState } from "react";
import { topFive } from "../../modules/ApiLinks";
import axios from "axios";

export default function Hero() {
  interface Movie {
    id: number;
    title: string;
    url: string;
    averageRating: string;
    reviewCount: number;
  }

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(topFive)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error("Failed to fetch movies:", err));
  });

  return (
    <>
      <section className="max-w-7xl mx-auto mt-8">
        <h2 className="font-semibold text-xl text-blue-600 tracking-tight mb-4 px-5">
          Must Watch{" "}
        </h2>
        <Carousel>
          <CarouselContent className="px-5">
            {movies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="relative overflow-hidden pb-0">
                  <img
                    src={movie.url}
                    alt={movie.title}
                    className=" aspect-2/3 w-full h-full object-cover"
                  />

                  <CardHeader className="absolute w-full bottom-0 py-4 rounded-none z-10 bg-gradient-to-t from-black/80 to-transparent">
                    <CardTitle className="text-xl font-semibold text-gray-50">
                      {movie.title}
                    </CardTitle>
                    <CardDescription className="flex gap-2 font-medium">
                      <Badge className="bg-gray-800 border-gray-600  shadow">⭐ {movie.averageRating.toFixed(1)}</Badge>
                      <p className="text-gray-400">
                        {movie.reviewCount} review
                        {movie.reviewCount !== 1 ? "s" : ""}{" "}
                      </p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
