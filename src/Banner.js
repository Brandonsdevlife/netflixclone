import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css';

function Banner() {
  
const [movie, setMovie] = useState([]); 
// properties set in the form of an array

  // creating an async function to load only once and return the request
  useEffect(() => { 
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) // pick a random number
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  

  // console.log(movie);

  function truncate(str, n){
      return str?.length > n ? str.substr( 0, n - 1 ) + "..." : str;
  } // make the text box grow smaller based on the number of characters

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center ",
      }}
    > 
      <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name} 
        </h1>
            {/* There are three different titles that can be used so use one or the other */}
            {/* '?' optional chaining + '||' or operator */}
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        {/* DIV BUTTON x 2 (PLAY/My List) */}
        <h1 className="banner__description">
            {truncate(movie.overview , 150)}
        </h1>
        {/* Description */}
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;


// make a new variation of netflix where there is an arrow to filter through each title 
// 