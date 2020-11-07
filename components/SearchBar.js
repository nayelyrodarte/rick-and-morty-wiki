import React from 'react';
import { makeStyles } from '@material-ui/styles';

const searchBarStyles = makeStyles({
  root: {
    margin: '2em 0em',
  },
  input: {
    width: 'auto',
    position: 'relative',
    margin: '1em auto',
  },
});

function SearchBar({ search }) {
  const styles = searchBarStyles();

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type='text'
        placeholder='Find by name...'
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
