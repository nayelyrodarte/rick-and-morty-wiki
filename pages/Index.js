import React from 'react';
import axios from 'axios';

import MainContainer from '../components/MainContainer';
import CharacterCard from '../components/CharacterCard';

function Index(props) {
  const displayCharacters = props.data.results.map((character) => (
    <CharacterCard character={character} key={character.id} />
  ));

  return (
    <MainContainer>
      <div>{displayCharacters}</div>
    </MainContainer>
  );
}

Index.getInitialProps = async () => {
  let res = await axios.get('https://rickandmortyapi.com/api/character');
  let data = res.data;

  return { data };
};

export default Index;
