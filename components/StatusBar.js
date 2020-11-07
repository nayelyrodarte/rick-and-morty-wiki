import React from 'react';
import { makeStyles } from '@material-ui/styles';

const StatusBarStyles = makeStyles({
  root: {
    color: 'white',
    width: '60%',
    margin: 'auto',
  },
});

function StatusBar({ status }) {
  const styles = StatusBarStyles();

  switch (status) {
    case 'Alive':
      return (
        <div className={styles.root} style={{ backgroundColor: 'green' }}>
          <p>{status}</p>
        </div>
      );
    case 'Dead':
      return (
        <div className={styles.root} style={{ backgroundColor: 'red' }}>
          <p>{status}</p>
        </div>
      );
    case 'unknown':
      return (
        <div className={styles.root} style={{ backgroundColor: 'purple' }}>
          <p>{status}</p>
        </div>
      );
  }
}

export default StatusBar;
