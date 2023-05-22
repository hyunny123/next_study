import Image from "next/image";
import Results from "./components/Results";

const API_KEY = process.env.API_KEY;
const API_KEYS = process.env.API_KEYS;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fecthTrending";
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/${
  //     genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  //   }?api_key=${API_KEY}&language=en-US&page=1`,
  //   { next: { revalidate: 10000 } }
  // );
  // const res = await fetch(`https://api.themoviedb.org/3/trending/movie/{time_window}`)
  // const data = await res.json();
  // const result = data.results;
  // console.log(result);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEYS}`,
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    // `https://api.themoviedb.org/3/trending/movie/${
    //   genre === "fetchTopRated" ? "top_rated" : "day"
    // }?language=en-US&page=1`,
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
