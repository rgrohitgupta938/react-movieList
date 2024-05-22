import React from "react";

const MovieList = ({ movies }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 bg-light border p-2">Title</div>
          <div className="col-3 bg-light border p-2">Genre</div>
          <div className="col-3 bg-light border p-2">Year</div>
        </div>
        {movies.map((m, inx) => (
          <div className="row hov" key={inx}>
            <div className="col-6 p-2 border">{m.title}</div>
            <div className="col-3 p-2 border">{m.genre}</div>
            <div className="col-3 p-2 border">{m.year}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
