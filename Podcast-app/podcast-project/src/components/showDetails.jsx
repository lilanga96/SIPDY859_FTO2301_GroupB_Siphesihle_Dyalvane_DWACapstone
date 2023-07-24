// src/components/ShowDetails.js
import { useParams } from 'react-router-dom';
import { fetchShowById } from './axios';

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = React.useState("");

  React.useEffect(() => {
    fetchShowById(showId)
      .then((response) => setShow(response.data))
      .catch((error) => console.error('Error fetching show details:', error));
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      <p>{show.description}</p>
    </div>
  );
};

export default ShowDetails;
