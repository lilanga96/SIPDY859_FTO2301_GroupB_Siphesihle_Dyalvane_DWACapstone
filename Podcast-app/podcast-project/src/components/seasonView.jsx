// SeasonView.js
import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchShowById } from './API';

const SeasonView = ({ season }) => {
    const { id } = useParams();
    const [expanded, setExpanded] = React.useState(false);
    const [show, setShow] = React.useState(null);
    


    React.useEffect(() => {
        fetchShowById(id)
          .then((response) => setShow(response.data))
          .catch((error) => console.error('Error fetching show details:', error));
      }, [id]);
    
      if (!show) {
        return <div>Loading...</div>;
      }

 const handleSeasonClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
       };

   return (
    <div>
      <button onClick={handleSeasonClick}>
        Season {season.season}
      </button>
      {expanded &&
        season.episodes.map((episode) => (
          <div key={episode.id}>
            <h4>{episode.title}</h4>
            <Link to={`/show/${show.id}`}>Back to Show View</Link>
            <H5AudioPlayer
              autoPlay={false}
              src={episode.file}
              onPlay={(e) => console.log('Audio is playing')}
              // Add any other audio player props you need
            />

          </div>
        ))}
    </div>
  );
};
export default SeasonView