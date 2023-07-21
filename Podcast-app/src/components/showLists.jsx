import React from "react";

const ShowList = () => {
  const [loading, setLoading] = React.useState(true);
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    // Fetch show data from the API endpoint
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching show data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the list of shows */}
      {shows.map((show) => (
        <div key={show.id}>
          <h2>{show.name}</h2>
          <img className="img" src={show.image} alt={show.name} />
          <p>Number of Seasons:{show.seasons.length}</p>
          <p>Last Updated:{show.lastUpdated}</p>
          {/* Display genres here */}
          
        </div>
      ))}
    </div>
  );
};

export default ShowList;
