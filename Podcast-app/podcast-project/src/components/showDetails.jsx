import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchShowById } from './API';
import SeasonView from './seasonView';

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchShowData();
  }, []);

  const fetchShowData = async () => {
    try {
      const response = await fetchShowById(id);
      const data = response.data;
      setShow(data);
    } catch (error) {
      console.error('Error fetching show details:', error);
    }
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
      <h3>Seasons:</h3>
      <div className='season-cards-container'>
        {show.seasons.map((season) => (
          <SeasonView
            key={season.season}
            season={season}
            favorites={favorites}
            setFavorites={setFavorites}
          />
          
        ))}
      </div>
      <Link to='/'>
        <button className='home-btn'> Home</button>
      </Link>
    </div>
  );
};

export default ShowDetails;
