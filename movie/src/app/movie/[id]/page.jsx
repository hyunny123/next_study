import React from "react";



export default async function MoviePage(params) {
  const movieId = params.movie_id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  return <div>page</div>;
}
