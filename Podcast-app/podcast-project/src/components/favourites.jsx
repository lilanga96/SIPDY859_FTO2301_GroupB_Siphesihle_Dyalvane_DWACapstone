// components/Favorites.js
import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favorite Shows</h2>
      <ul>
        {favorites.map((show) => (
          <li key={show.id}>{show.title}
          <img className="img" src={show.image} alt={show.title} />
          <p>Number of Seasons:{show.seasons}</p>
          <p>Last Updated:{show.updated}</p>
          <p>Genres: {show.genres}</p>
            <p>Added Date: {20}</p> 
          <button onClick={() => removeFromFavorites(show.id)}>Remove from Favorites</button>
          </li>
          

        ))}
      </ul>

    </div>
  );
};

export default Favorites;
