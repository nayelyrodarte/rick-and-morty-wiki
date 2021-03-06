import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import { makeStyles } from '@material-ui/styles';

const logoStyles = makeStyles({
  root: {
    width: '50%',
    display: 'block',
    margin: '1.5em auto',
  },
  subHeader: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: '2em',
  },
});

function MainContainer(props) {
  const styles = logoStyles();
  return (
    <Container>
      <Head>
        <title>Rick & Morty Wiki</title>
      </Head>
      <img
        className={styles.root}
        src='/rick-and-morty-logo.png'
        alt='Rick and Morty logo'
      />
      {props.children}
    </Container>
  );
}

export default MainContainer;
