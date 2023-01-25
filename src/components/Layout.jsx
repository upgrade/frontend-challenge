import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Layout({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {children}
      </Container>
    </React.Fragment>
  );
}