import React from 'react';
import { makeStyles } from '@material-ui/styles';

const cardStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    borderRadius: '20px',
    color: 'white',
    display: 'grid',
    fontFamily: 'Roboto',
    fontSize: '0.8em',
    lineHeight: '1px',
    padding: '0.2em',
    textAlign: 'center',
  },
  img: {
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '1em',
    width: '10em',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
});

function CharacterCard({ character }) {
  const styles = cardStyles();
  const { name, image, status, species, location } = character;

  return (
    <div className={styles.root}>
      <img src={image} alt={`${name} avatar`} className={styles.img} />
      <p className={styles.title}>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
      <p>{location.name}</p>
    </div>
  );
}

export default CharacterCard;
