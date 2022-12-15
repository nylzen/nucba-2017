import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background: purple;
`;

const UnaCosa = styled.div`
  height: 100vh;
  background: greenyellow;
`;

const OtraCosa = styled.div`
  height: 100vh;
  background: crimson;
`;

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <Container>
      <UnaCosa data-aos='fade-up'>HOla</UnaCosa>
      <OtraCosa>
        <h2>Tuki</h2>
      </OtraCosa>
    </Container>
  );
};

export default Home;
