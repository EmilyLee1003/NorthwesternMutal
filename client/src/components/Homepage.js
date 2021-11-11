import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
import Axios from "axios";
import OneMovie from "./OneMovie";
import "./style.css";
export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=54021b256950a71cef7190caa88e8f71&page=1"
    ).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleMovieInfo = (data) => {
    setClickedMovie(data);
    setModalShow(true);
  };

  console.log(movies);

  return (
    <div>
      {clickedMovie && (
        <MovieModal
          key={clickedMovie}
          movieData={clickedMovie}
          show={modalShow}
          onHide={() => setModalShow(false)}
          // modal={clickedMovie}
        />
      )}
      <div className="popular">
        <h1> MOST POPULAR MOVIES </h1>
        {movies.map((data) => {
          return (
            <div className="popularMovie">
              <OneMovie
                key={data.id}
                movieData={data}
                handleMovieInfo={() => handleMovieInfo(data)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
