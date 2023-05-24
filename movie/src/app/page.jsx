import Image from "next/image";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;
const API_KEYS = process.env.API_KEYS;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fecthTrending";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEYS}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "trending/tv/day" : "trending/movie/day"
    }?language=en-US`,
    options
  );

  if (!res.ok) {
    throw new Error("fetch data error");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
