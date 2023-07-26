import React from 'react';

const GenreFilter = ({ genres, activeGenre, onGenreClick }) => {
  return (
    <div>
      <h3>Filter by Genre:</h3>
      {genres.map((genre) => (
        <span
          key={genre.id}
          style={{
            cursor: 'pointer',
            color: genre.id === activeGenre ? 'blue' : 'black',
            marginRight: '10px',
          }}
          onClick={() => onGenreClick(genre.id)}
        >
          {genre.title}
        </span>
      ))}
    </div>
  );
};

export default GenreFilter;
