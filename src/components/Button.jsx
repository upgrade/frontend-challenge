import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({onClickProp, copy}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={(e) => onClickProp(e)}>{copy}</Button>
    </Stack>
  );
}