// SeasonView.js

import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const SeasonView = ({ season}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleSeasonClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <h3 onClick={handleSeasonClick}>Season {season.season}</h3>
      {expanded && (
        <div className="season-cards-container"> {/* Use the container class */}
          {season.episodes.map((episode) => (
            <div className="season-card" key={episode.id}> {/* Use the card class */}
              <h3>{episode.title}</h3>
              <H5AudioPlayer
                autoPlay={false}
                src={episode.file}
                onPlay={(e) => console.log('Audio is playing')}
              />
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonView;
