import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const containerStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to bottom, #159957, #155799);',
    borderRadius: '20px',
    padding: '1.5em',
    ['@media (min-width:780px)']: {},
  },
});

function CharactersContainer(props) {
  const styles = containerStyles();
  return (
    <div>
      <Grid
        container
        spacing={2}
        alignContent='center'
        justify='center'
        className={styles.root}
      >
        {props.children}
      </Grid>
    </div>
  );
}

export default CharactersContainer;
