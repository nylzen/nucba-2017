import React from 'react';

const Persona = ({ img, name, age }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
    </div>
  );
};

export default Persona;
