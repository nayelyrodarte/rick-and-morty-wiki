import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import MainContainer from '../../components/MainContainer';
import StatusBar from '../../components/StatusBar';
import { makeStyles } from '@material-ui/styles';

const idCharacterStyles = makeStyles({
  root: {
    margin: '2em 0em',
    fontFamily: 'Roboto',
  },
  breadcrumbs: {
    margin: '2em 0',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    background: '#155799',
    width: '8em',
    height: '2em',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2em',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
  },
  card: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    padding: '1.5em',
  },
  grid: {
    flexGrow: 1,
    borderRadius: '20px',
    textAlign: 'center',
    justifySelf: 'center',
    margin: 'auto',
    boxShadow: '4px 2px 5px -3px #000000',
  },
  img: {
    borderRadius: '50%',
  },
  link: {
    color: 'black',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
});

function characterProfile(props) {
  const styles = idCharacterStyles();
  const router = useRouter();
  const id = router.query;

  return (
    <MainContainer>
      <div className={styles.root}>
        <p className={styles.breadcrumbs}>
          <Link href='/'>
            <a className={styles.link}>Home</a>
          </Link>
          <span className={styles.bold}> / {props.data.name}</span>
        </p>

        <Grid item xs={10} sm={8} md={6} lg={6} className={styles.grid}>
          <div className={styles.card}>
            <img
              src={props.data.image}
              alt={props.data.name}
              width='60%'
              className={styles.img}
            />
            <p className={styles.title}>{props.data.name}</p>
            <div>
              <span className={styles.bold}>Status:</span>
              <StatusBar
                status={props.data.status}
                style={{ width: '50%', color: 'white' }}
              />
            </div>
            <p>
              <p className={styles.bold}>Gender:</p>
              {props.data.gender}
            </p>
            <p>
              <p className={styles.bold}>Origin:</p>
              {props.data.origin.name}
            </p>
            <p>
              <p className={styles.bold}>Last known location:</p>
              {props.data.location.name}
            </p>
            <p>
              <p className={styles.bold}>Bio:</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur impedit tempore, perferendis sint consectetur
              corrupti sunt aperiam deleniti veritatis non incidunt, debitis
              distinctio ut numquam pariatur nisi architecto, neque iusto?
            </p>
          </div>
        </Grid>

        <Link href='/'>
          <button className={styles.button}>Go back</button>
        </Link>
      </div>
    </MainContainer>
  );
}

characterProfile.getInitialProps = async (ctx) => {
  let res = await axios.get(
    `https://rickandmortyapi.com/api/character/${ctx.query.id}`
  );
  let data = res.data;
  console.log(data);

  return { data };
};

export default characterProfile;
