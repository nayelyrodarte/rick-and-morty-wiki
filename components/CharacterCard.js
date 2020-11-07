import React from 'react';
import StatusBar from '../components/StatusBar';
import { makeStyles } from '@material-ui/styles';

const cardStyles = makeStyles({
  root: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    boxShadow: '4px 2px 5px -3px #000000',
    color: 'black',
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
      <StatusBar status={status} />
      <p>{species}</p>
      <p>{location.name}</p>
    </div>
  );
}

export default CharacterCard;
