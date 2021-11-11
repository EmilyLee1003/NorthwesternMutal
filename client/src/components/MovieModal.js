import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MovieModal(props) {
  const imgApi = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movieModal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movieData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <img
              className="modalImg"
              src={imgApi + props.movieData.poster_path}
              alt="movie title"
            ></img>
            <li> {props.movieData.overview}</li>
            <li> Release date: {props.movieData.release_date}</li>
            <li> Vote average: {props.movieData.vote_average} </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieModal;
