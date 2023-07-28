// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowDetails from './components/showDetails';
import ShowLists from './components/showLists';
import Favorites from './components/favourites';



const App = () => {
  const [favorites, setFavorites] = React.useState([]);
  const [favoriteSeasonEpisodes, setFavoriteSeasonEpisodes] = React.useState([]); // Define favoriteSeasonEpisodes state


  const removeFromFavorites = (showId) => {
    setFavorites(favorites.filter((show) => show.id !== showId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowLists  favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/show/:id" element={<ShowDetails favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}removeFromFavorites={removeFromFavorites} />} />
        <Route
            path="/show/:id"
            element={
              <ShowDetails
                favorites={favorites}
                setFavorites={setFavorites}
                removeFromFavorites={removeFromFavorites}
                favoriteSeasonEpisodes={favoriteSeasonEpisodes} // Pass the favoriteSeasonEpisodes prop
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
         
      </Routes>
      
    </Router>

  );
};

export default App;
