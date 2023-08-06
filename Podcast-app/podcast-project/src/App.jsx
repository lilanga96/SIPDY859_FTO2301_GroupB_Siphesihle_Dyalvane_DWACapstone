
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowLists from './components/showLists';
import Favorites from './components/favourites';
import SeasonView from './components/showDetails';



const App = () => {
  const [favorites, setFavorites] = React.useState([]);



  const removeFromFavorites = (episodeId) => {
    setFavorites(favorites.filter((season) => season.id !== episodeId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowLists  favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/show/:id" element={<SeasonView favorites={favorites} setFavorites={setFavorites} removeFromFavorites={removeFromFavorites}/>} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}removeFromFavorites={removeFromFavorites} />} />
        <Route
            path="/show/:id"
            element={
              <SeasonView
                favorites={favorites}
                setFavorites={setFavorites}
                removeFromFavorites={removeFromFavorites}
              
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
