import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'pink',
    ['@media (min-width:780px)']: {
      backgroundColor: 'yellow',
    },
  },
});

function CharactersContainer(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={2}
        alignContent='center'
        justify='center'
        className={classes.root}
      >
        {props.children}
      </Grid>
    </div>
  );
}

export default CharactersContainer;
