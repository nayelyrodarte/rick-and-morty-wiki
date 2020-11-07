import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import axios from 'axios';
import { makeStyles } from '@material-ui/styles';

const breadcrumbStyles = makeStyles({
  root: {
    listStyleType: 'none',
    display: 'grid',
    gridAutoFlow: 'row',
  },
});

function characterProfile(props) {
  const breadcrumbs = breadcrumbStyles();

  const router = useRouter();
  const id = router.query;

  return (
    <div>
      <ul className={breadcrumbs.root}>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <li>{props.data.name}</li>
      </ul>

      <img src={props.data.image} alt={props.data.name} />
      <p>{props.data.name}</p>
      <p>
        <span>Status:</span>
        {props.data.status}
      </p>
      <p>
        <span>Gender:</span>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        impedit tempore, perferendis sint consectetur corrupti sunt aperiam
        deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur
        nisi architecto, neque iusto?
      </p>
      <Link href='/'>
        <button>Volver</button>
      </Link>
    </div>
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
