import React, { useRef } from 'react';

const Ref = () => {
  const title = useRef();
  const handleTitleColor = () => {
    console.log(title.current);
    title.current.style.color = 'crimson';
  };

  return (
    <>
      <h2 ref={title}>Holu</h2>
      <button onClick={handleTitleColor}>Cambiar color</button>
    </>
  );
};

export default Ref;
