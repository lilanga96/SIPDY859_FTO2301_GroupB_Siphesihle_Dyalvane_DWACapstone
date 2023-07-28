
import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SeasonView = ({ season, favorites, setFavorites }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleSeasonClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const addToFavorites = (episodeId) => {
    const episodeToAdd = season.episodes.find((episode) => episode.id === episodeId);
    if (episodeToAdd && !favorites.some((favorite) => favorite.id === episodeId)) {
      const addedDate = new Date().toLocaleString();
      const episodeWithDate = { ...episodeToAdd, addedDate };
      setFavorites([...favorites, episodeWithDate]);
    }
  };

  return (
    <div>
      <h3 onClick={handleSeasonClick}>Season {season.season}</h3>
      {expanded && (
        <div className="season-cards-container">
          {season.episodes.map((episode) => (
            <div className="season-card" key={episode.id}>
              <h3>{episode.title}</h3>
              <H5AudioPlayer
                autoPlay={false}
                src={episode.file}
                onPlay={(e) => console.log('Audio is playing')}
              />
              <button onClick={() => { addToFavorites(episode.id); alert("Added to favorites!"); }}>
                Add to Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonView;
