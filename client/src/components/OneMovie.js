import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function OneMovie(props) {
  const imgApi = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <Container onClick={props.handleMovieInfo}>
        <Row>
          <Col>
            <h1>{props.movieData.title} </h1>
            <img
              src={imgApi + props.movieData.poster_path}
              alt="movie poster"
            ></img>
            <p> overview: {props.movieData.overview} </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default OneMovie;
