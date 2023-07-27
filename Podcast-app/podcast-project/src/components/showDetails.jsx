// src/components/ShowDetails.js
import { useParams } from 'react-router-dom';
import { fetchShowById } from './API';
import React from 'react';
import { Link } from 'react-router-dom';
import 'react-h5-audio-player/lib/styles.css'
import SeasonView from './seasonView';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = React.useState(null);
  const [expandedSeason, setExpandedSeason] = React.useState(null);

  React.useEffect(() => {
    fetchShowById(id)
      .then((response) => setShow(response.data))
      .catch((error) => console.error('Error fetching show details:', error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const handleSeasonClick = (season) => {
    setExpandedSeason((prevSeason) =>
      prevSeason === season ? null : season
    );
  };

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      
      {show.seasons.map((season) => (
        <div key={season.season}>
          <h3 onClick={() => handleSeasonClick(season.season)}>
          Season {season.season}
          </h3>
          <img className='SeasonImage' src={season.image} alt={`Season ${season.season}`} />
          <p>Number of Episodes: {season.episodes.length}</p>
          
          

          {expandedSeason === season.season && (
            <SeasonView season={season} />
          )}

          
          
        </div>
      ))}
  
    </div>
  );
};
export default ShowDetails;
