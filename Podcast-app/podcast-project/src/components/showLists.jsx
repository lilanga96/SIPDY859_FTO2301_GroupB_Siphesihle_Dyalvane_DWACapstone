import { fetchAllShows } from "./axios";
import React from "react";

const ShowLists = () => {
  const [loading, setLoading] = React.useState(false);
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    fetchAllShows()
      .then((response) => setShows(response.data))

      .catch((error) => console.error('Error fetching shows:', error));
      
      
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <h1>Podcast App</h1>

      {shows.map((show) => (
        <div key={show.id}>
          <h2>{show.title}</h2>
          <img className="img" src={show.image} alt={show.title} />
          <p>Number of Seasons:{show.seasons}</p>
          <p>Last Updated:{show.updated}</p>
          <p>Genres: {show.genres}</p>
          
          </div>
      ))}
          
      
        
    
    </div>
  );
};

export default ShowLists;
