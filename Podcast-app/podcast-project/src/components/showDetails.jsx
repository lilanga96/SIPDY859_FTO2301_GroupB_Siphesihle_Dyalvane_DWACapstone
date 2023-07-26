// src/components/ShowDetails.js
import { useParams } from 'react-router-dom';
import { fetchShowById } from './API';
import React from 'react';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = React.useState(null);

  React.useEffect(() => {
    fetchShowById(id)
      .then((response) => setShow(response.data))
      .catch((error) => console.error('Error fetching show details:', error));
  }, [id]);

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
