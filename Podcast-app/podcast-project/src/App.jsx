// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowDetails from './components/showDetails';
import ShowLists from './components/showLists';
import Favorites from './components/favourites';


const App = () => {
  const [favorites, setFavorites] = React.useState([]);

  const removeFromFavorites = (showId) => {
    setFavorites(favorites.filter((show) => show.id !== showId));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">ShowLists</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<ShowLists  favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/show/:id" element={<ShowDetails favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}removeFromFavorites={removeFromFavorites} />} />
      
         
      </Routes>
      </div>
    </Router>

  );
};

export default App;
