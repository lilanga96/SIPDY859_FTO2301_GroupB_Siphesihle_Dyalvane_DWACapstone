// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowDetails from './components/showDetails';
import ShowLists from './components/showLists';
import Favorites from './components/favourites';


const App = () => {
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
        <Route path="/" element={<ShowLists />} />
        <Route path="/show/:showId" element={<ShowDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
    </Router>

  );
};

export default App;
