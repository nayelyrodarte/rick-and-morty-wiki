import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import MainContainer from '../../components/MainContainer';
import StatusBar from '../../components/StatusBar';

import axios from 'axios';

function characterProfile(props) {
  const router = useRouter();
  const id = router.query;

  return (
    <MainContainer>
      <div
        style={{
          margin: '2em 0em',
          fontFamily: 'Roboto',
        }}
      >
        <p>
          <Link href='/'>
            <a style={{ color: 'black', fontWeight: 'bold' }}>Home</a>
          </Link>
          <span> / {props.data.name}</span>
        </p>

        <Grid
          style={{
            flexGrow: 1,
            borderRadius: '20px',
            padding: '1.5em',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#ebe8ce',
              borderRadius: '20px',
              padding: '1.5em',
            }}
          >
            <img
              src={props.data.image}
              alt={props.data.name}
              width='60%'
              style={{
                borderRadius: '50%',
              }}
            />
            <p>{props.data.name}</p>
            <div>
              <span>Status:</span>
              <StatusBar
                status={props.data.status}
                style={{ width: 'max-content' }}
              />
            </div>
            <p>
              <p>Gender:</p>
              {props.data.gender}
            </p>
            <p>
              <span>Origin:</span>
              {props.data.origin.name}
            </p>
            <p>
              <span>Last known location:</span>
              {props.data.location.name}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur impedit tempore, perferendis sint consectetur
              corrupti sunt aperiam deleniti veritatis non incidunt, debitis
              distinctio ut numquam pariatur nisi architecto, neque iusto?
            </p>
          </div>
        </Grid>

        <Link href='/'>
          <button
            style={{
              background: '#155799',
              width: '8em',
              height: '2em',
              marginTop: '2em',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
            }}
          >
            Go back
          </button>
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
