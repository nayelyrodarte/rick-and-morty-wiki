import React from 'react';
import Navigation from './Navigation';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import CharactersContainer from '../components/CharactersContainer';

function MainContainer(props) {
  return (
    <Container>
      <Head>
        <title>Rick & Morty Wiki</title>
      </Head>
      <img src='/rick-and-morty-logo.png' alt='' />
      <h2>Wiki</h2>
      {props.children}
    </Container>
  );
}

export default MainContainer;
