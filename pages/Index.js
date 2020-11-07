import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import SearchBar from '../components/SearchBar';
import Router from 'next/router';

import MainContainer from '../components/MainContainer';
import CharacterCard from '../components/CharacterCard';
import CharacterContainer from '../components/CharactersContainer';

function Index(props) {
  const [searchCharacter, setSearchCharacter] = useState('');
  const [characters, setCharacters] = useState(props.data.results);

  const filterCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  const displayCharacters = filterCharacters.map((character) => (
    <Grid
      item
      xs={10}
      sm={6}
      md={5}
      lg={3}
      key={character.id}
      onClick={(e) =>
        Router.push('/character/[id]', `/character/${character.id}`)
      }
    >
      <CharacterCard character={character} />
    </Grid>
  ));

  return (
    <div>
      <MainContainer>
        <SearchBar search={setSearchCharacter} />
        <CharacterContainer>{displayCharacters}</CharacterContainer>
      </MainContainer>
    </div>
  );
}

Index.getInitialProps = async () => {
  let res = await axios.get(`https://rickandmortyapi.com/api/character/`);
  let data = res.data;

  return { data };
};

export default Index;
