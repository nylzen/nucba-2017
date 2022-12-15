import React from 'react';
import shortid from 'shortid';
import { speakers } from '../../data/data';
import { Button, SectionTitle } from '../globalComponents/GlobalComponents';
import SpeakerCard from '../speakerCard/SpeakerCard';
import {
  SpeakerCardsContainer,
  SpeakersSection,
  TitleContainer,
} from './SpeakersStyles';

const Speakers = () => {
  return (
    <>
      <SpeakersSection>
        <TitleContainer>
          <SectionTitle>Speakers</SectionTitle>
          <Button>Sumarme</Button>
        </TitleContainer>
        <SpeakerCardsContainer>
          {speakers.map(speaker => {
            return <SpeakerCard key={shortid.generate()} {...speaker} />;
          })}
        </SpeakerCardsContainer>
      </SpeakersSection>
    </>
  );
};

export default Speakers;
