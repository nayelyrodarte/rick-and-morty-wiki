import React from 'react';
import { makeStyles } from '@material-ui/styles';

const searchBarStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: 'auto',
    height: '1.5em',
    borderRadius: '10px',
    border: 'solid #159857 2px',
  },
  img: {
    width: '3.5em',
    position: 'relative',
    top: '-1em',
  },
});

function SearchBar({ search }) {
  const styles = searchBarStyles();

  return (
    <div className={styles.root}>
      <img
        className={styles.img}
        src='/portal-gun.png'
        alt='portal gun image'
      />
      <input
        className={styles.input}
        type='text'
        placeholder='Search by name'
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
