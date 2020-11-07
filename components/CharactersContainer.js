import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Pagination } from '@material-ui/lab';

const containerStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#161a1d',
    borderRadius: '20px',
    padding: '1.5em',
    ['@media (min-width:780px)']: {},
  },
});

function CharactersContainer(props) {
  const styles = containerStyles();
  console.log(props.pageCount);
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
      <Pagination count={props.pageCount} />
    </div>
  );
}

export default CharactersContainer;
