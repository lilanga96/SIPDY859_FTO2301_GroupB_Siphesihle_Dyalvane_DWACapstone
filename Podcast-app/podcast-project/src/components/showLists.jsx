import { fetchAllShows } from "./API";
import React from "react";
import { Link } from "react-router-dom";



const ShowLists = ({ favorites, setFavorites }) => {
  const [shows, setShows] = React.useState([]);
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [sortBy, setSortBy] = React.useState('title');
  const [searchQuery, setSearchQuery] = React.useState('');

  const addToFavorites = (showId) => {
    const showToAdd = shows.find((show) => show.id === showId);
    if (showToAdd) {
      const addedDate = new Date().toLocaleString();
      const showWithDate = { ...showToAdd, addedDate };
      setFavorites([...favorites, showWithDate]);
    }
  };

  React.useEffect(() => {
    fetchAllShows()
      .then((response) => setShows(response.data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedAndFilteredShows = React.useMemo(() => {
    let filtered = [...shows];

    // Filter shows based on search query
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        (show) =>
          show.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort shows based on selected criteria
    return filtered.sort((a, b) => {
      if (sortBy === 'title') {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return sortOrder === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      } else if (sortBy === 'dateUpdated') {
        const dateA = new Date(a.updated);
        const dateB = new Date(b.updated);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
    });
  }, [shows, searchQuery, sortBy, sortOrder]);
  const genreLookupTable = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  };
  

  if (!shows || shows.length === 0) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <div>
      <div className="header">
        <div className="navbar">
        <h1>Podcast App</h1>
        <div className='navbar-title'>
              <Link to="/">ShowLists</Link>
              </div>
            
              <div className='navbar-title'>
              <Link to="/favorites">Favorites</Link>
              </div>
      <div>

        <div className="sort-bar">
        
        <label>Sort By:</label>
        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [selectedSortBy, selectedSortOrder] = e.target.value.split('-');
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
      
      <div>
        </div>
        
        <label className="search-bar">Search By Title:</label>
        <input type="text" value={searchQuery} onChange={handleSearch} />
      
      </div>
      </div>
      
      </div>


       <div className="show-cards-container">
       {sortedAndFilteredShows.map((show) => (
        <div className="show-card" key={show.id}>
        
          <Link to={`/show/${show.id}`}> <img src={show.image} alt={show.title}/></Link>
          <h3>{show.title}</h3>
          <p>Number of Seasons: {show.seasons}</p>
          <p>Last Updated: {formatDate(show.updated)}</p>
          <p>Genres: {show.genres.map((genreId) => genreLookupTable[genreId]).join(', ')}</p>
          <button onClick={() => { addToFavorites(show.id); alert("Added to favorites!"); }}>Add to Favorites</button>
           
        
        </div>
      )) 
     }
     </div>
    
     </div>
  );
};

export default ShowLists;
