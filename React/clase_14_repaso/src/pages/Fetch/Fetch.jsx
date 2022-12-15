import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, [setData]);

  const location = useLocation();
  console.log(location);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Un fetch tranki
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {data.map(character => (
          <div key={character.id}>
            <img src={character.image} />
            <p>{character.name}</p>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fetch;
