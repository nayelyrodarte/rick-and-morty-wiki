import React from 'react';
import { makeStyles } from '@material-ui/styles';

const searchBarStyles = makeStyles({
  root: {
    margin: '2em 0em',
  },
  input: {
    width: 'auto',
    height: '1.5em',
    borderRadius: '10px',
    position: 'relative',
    margin: '1em auto',
    border: 'solid #159857 2px',
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
