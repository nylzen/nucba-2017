import React from 'react';

const EjemploMap = () => {
  const names = ['Nel', 'Nacho', 'Marian', 'Pepito', 'Nacho 2'];

  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default EjemploMap;
