
import React from "react";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, removeFromFavorites }) => {
  const [sortOrder, setSortOrder] = React.useState("asc");
  const [sortBy, setSortBy] = React.useState("title");

  const sortFavorites = React.useCallback(() => {
    const sortedFavorites = [...favorites].sort((a, b) => {
      if (sortBy === "title") {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return sortOrder === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      } else if (sortBy === "dateUpdated") {
        const dateA = new Date(a.updated);
        const dateB = new Date(b.updated);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }
    });
    return sortedFavorites;
  }, [favorites, sortBy, sortOrder]);

  const sortedFavorites = sortFavorites();

  return (
    <div>
      <h1>My Favorites</h1>
      <div>
        <label>Sort By:</label>
        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [selectedSortBy, selectedSortOrder] = e.target.value.split("-");
            setSortBy(selectedSortBy);
            setSortOrder(selectedSortOrder);
          }}
        >
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="dateUpdated-asc">Date Updated (Ascending)</option>
          <option value="dateUpdated-desc">Date Updated (Descending)</option>
        </select>
      </div>
        <div className="favorites-container">
      {sortedFavorites.map((favorite) => (
        <div key={favorite.id} className="favorite-card">
          <Link to={`/show/${favorite.id}`}>{favorite.title}</Link>
          <img className="img" src={favorite.image} alt={favorite.title} />
          <p>Number of Seasons: {favorite.seasons}</p>
          <p>Last Updated: {favorite.updated}</p>
          <p>Genres: {favorite.genres.join(", ")}</p>
          <p>Added Date: {favorite.addedDate}</p>
          <button onClick={() => removeFromFavorites(favorite.id)}>Remove from Favorites</button>
        </div>

      ))}

    </div>
    <Link to='/'>
        <button className='home-btn'> Home</button>
      </Link>
    </div>
  );
};

export default Favorites;
