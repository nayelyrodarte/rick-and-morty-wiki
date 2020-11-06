import React from 'react';
import Navigation from './Navigation';
import { Container } from '@material-ui/core';

function MainContainer(props) {
  return (
    <Container maxWidth='sm'>
      <Navigation />
      <div>{props.children}</div>
    </Container>
  );
}

export default MainContainer;
