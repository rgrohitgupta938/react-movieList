import React from "react";

const GenreFilter = ({ genres }) => {
  const handleButton = (b) => {
    console.log(`Filtering By ${b}`);
  };
  return (
    <div>
      <div className="container bg-light p-3 mt-3 mb-3">
        <h2>Filter by Genre</h2>
        <div className="row gen-row w-100 d-flex justify-content-around ps-2 pe-2">
          {genres.map((b, inx) => (
            <button
              onClick={() => handleButton(b)}
              className="btn btn-light pt-2 pb-2 ps-4 pe-4"
              key={inx}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreFilter;
