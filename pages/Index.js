import React from 'react';
import axios from 'axios';

function Index(props) {
  console.log(props);
  return <div>Hello</div>;
}

Index.getInitialProps = async () => {
  let res = await axios.get('https://rickandmortyapi.com/api/character');
  let data = res.data;

  return { data };
};

export default Index;
