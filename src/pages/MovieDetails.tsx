import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { reviews, movies } from "../modules/ApiLinks";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";



interface Movie {
  id: number;
  title: string;
  url: string;
  synopsis: string;
  runtime: string;
  releaseDate: string;
  genreName: string | null;
  ratingCode: string | null;
}

interface Review {
  id: number;
  score: number;
  title: string;
  content: string;
  criticName: string;
  publishedDate: string;
  timePublishedAgo: string;
}

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieReviews, setMovieReviews] = useState<Review[]>([]);

  useEffect(() => {
    axios
      .get(`${movies}/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Failed to fetch movie:", err));

    axios
      .get(`${reviews}?movieid=${id}`)
      .then((res) => setMovieReviews(res.data))
      .catch((err) => console.error("Failed to fetch movie:", err));
  }, [id]);


  if (!movie) return <p className="p-6">Loading...</p>;

  return (
    <>
      <div className="mx-auto max-w-5xl space-y-10 p-6">
        {/* Movie detail */}
        <div className="flex gap-8">
          <img
            src={movie.url}
            alt={movie.title}
            className="w-48 shrink-0 rounded-lg object-cover aspect-[2/3]"
          />
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">{movie.title}</h1>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <span>{movie.runtime}</span>
              {movie.genreName && <span>· {movie.genreName}</span>}
              {movie.ratingCode && (
                <span className="rounded border px-1">{movie.ratingCode}</span>
              )}
            </div>
            {movie.synopsis && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {movie.synopsis}
              </p>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">
            Reviews{" "}
            <span className="text-sm font-normal text-muted-foreground">
              ({movieReviews.length})
            </span>
          </h2>

          {movieReviews.length === 0 ?
            <p className="text-sm text-muted-foreground">No reviews yet.</p>
          : movieReviews.map((review) => (
              <Card key={review.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {review.title}
                  </CardTitle>
                  <CardDescription className="flex gap-2 text-xs">
                    <span>{review.criticName}</span>
                    <span>· {review.timePublishedAgo}</span>
                    <span>· ⭐ {review.score} / 5</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{review.content}</p>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </>
  );
}
