import React from 'react';

function RootTheme() {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundImage:
              'url(https://designshack.net/wp-content/uploads/gradient-background.jpg)',
          },
        },
      },
    },
  });
}

export default RootTheme;
