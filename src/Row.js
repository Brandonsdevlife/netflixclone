import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, isSmallRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // run a piece of code when the row loads i need to run a piece of code
  // pull information when this row loads
  useEffect(() => {
    // if [], urn once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // clg the results of the data GET from request API link
      // console.log(request.data.results);
      // setMovies = the results which is an array of json data
      // console.table to see the data in a table format
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height:"390",
    width:"100%",
    playerVars: {
      autoplay: 1,
    },
  };

console.log(movies)

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "") // grabs all YouTube videos associated with the title,  name, or original name
      .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
  };

  return (
    
    <div className="row">
      
      
      <div className="row__posters">
        {movies.map((movie) => (
          <div className="container">
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"} 
            || row__poster ${isSmallRow && "row__posterSmall"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
            <h1 
            class="row__poster__title" 
            className="row__poster__title"> 
              {movie?.name || movie?.title} 
            </h1>
          </div>
        ))}
        
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
