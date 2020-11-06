import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import MainContainer from '../components/MainContainer';
import CharacterCard from '../components/CharacterCard';
import CharacterContainer from '../components/CharactersContainer';

function Index(props) {
  const displayCharacters = props.data.results.map((character) => (
    <Grid item xs={10} sm={6} md={5} lg={3} key={character.id}>
      <CharacterCard character={character} />
    </Grid>
  ));

  return (
    <div>
      <MainContainer>
        <CharacterContainer>{displayCharacters}</CharacterContainer>
      </MainContainer>
    </div>
  );
}

Index.getInitialProps = async () => {
  let res = await axios.get('https://rickandmortyapi.com/api/character');
  let data = res.data;

  return { data };
};

export default Index;
