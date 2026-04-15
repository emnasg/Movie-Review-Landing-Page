import { useEffect, useState } from "react";
import { movies } from "../../modules/ApiLinks";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface Movie {
  id: number;
  title: string;
  url: string;
  synopsis: string;
  runtime: string;
  averageCriticScore: number;
  releaseDate: string;
  genreName: string | null;
}
export default function MovieList() {
    const navigate = useNavigate();
     const [movieList, setMoviesList] = useState<Movie[]>([]);

     useEffect(() => {
       axios
         .get(movies)
         .then((res) => setMoviesList(res.data))
         .catch((err) => console.error("Failed to fetch movies:", err));
     });

    
  return (
    <>
      <section className="max-w-7xl  mx-auto">
        <h2 className="font-semibold text-xl text-blue-600 tracking-tight  mt-10 px-4">
          All Movie Reviews{" "}
        </h2>
        <div className="grid grid-cols-2  gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              className="overflow-hidden"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <img
                src={movie.url}
                alt={movie.title}
                className="aspect-2/3 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="line-clamp-1 text-sm">
                  {movie.title}
                </CardTitle>
                <CardDescription className="space-y-1">
                  <span className="text-xs mr-2">{movie.runtime}</span>
                  <span>
                    <Badge variant="outline">
                      ⭐ {movie.averageCriticScore.toFixed(1)}
                    </Badge>
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
