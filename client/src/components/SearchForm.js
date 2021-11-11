import React, { useState } from "react";
import Axios from "axios";
import OneMovie from "./OneMovie";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MovieModal from "./MovieModal";
import Button from "react-bootstrap/Button";
import "./style.css";

function SearchForm(props) {
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [popularity, setPopularity] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);

  const handleSearch = () => {
    Axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=54021b256950a71cef7190caa88e8f71&query=" +
        searchString
    )
      .then((response) => {
        setSearchResult(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    setSortShow(true);
  };

  const sortPopularity = () => {
    setPopularity(
      searchResult.sort((a, b) => (b.popularity < a.popularity ? -1 : 0))
    );
  };

  const sortReleaseDate = () => {
    setReleaseDate(
      searchResult.sort((a, b) => (a.release_date > b.release_date ? -1 : 0))
    );
  };

  const handleMovieInfo = (data) => {
    setClickedMovie(data);
    setModalShow(true);
  };

  return (
    <div className>
      <div className="searchInput">
        <input
          placeholder="search by title"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSearch}
        >
          search
        </Button>
      </div>

      {clickedMovie && (
        <MovieModal
          movieData={clickedMovie}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}

      <div className="dropButton">
        {sortShow && (
          <DropdownButton
            onHide={() => setSortShow(false)}
            as={ButtonGroup}
            title="Sort By:"
            id="sm-vertical-dropdown-1"
            className="dropDown"
          >
            <Dropdown.Item eventKey="1" onClick={sortPopularity}>
              popularity
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={sortReleaseDate}>
              release Date
            </Dropdown.Item>
          </DropdownButton>
        )}
      </div>

      <div className="displayContainer">
        {searchResult.map((data) => {
          return (
            <div className="display">
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

export default SearchForm;
