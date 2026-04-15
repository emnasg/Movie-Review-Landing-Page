import Hero from "../components/layout/Hero";
import MovieList from "../components/layout/MovieList";

export default function Home() {
  return (
    <>
      <section>
        <header className="bg-gray-950">
          <div className="flex flex-col gap-6 max-w-125 mx-auto py-10 px-5">
            <h1 className="font-semibold text-5xl  text-center tracking-tighter text-gray-50 ">
              Your Next Obsession, Found.
            </h1>
            <p className="text-center font-medium text-gray-50">
              Stop scrolling through the "meh" and start streaming the "wow."{" "}
              <span className="text-gray-400">
                We’ve curated the highest-rated cinematic masterpieces so you
                can binge-watch until your heart's content.
              </span>
            </p>
          </div>
        </header>

        <Hero />
        <MovieList />
      </section>
    </>
  );
}
