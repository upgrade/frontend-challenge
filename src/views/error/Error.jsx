import React from 'react';
import { Button, Typography, Stack, Alert } from '@mui/material';

import { Navigation } from '../../components';

export const Error = ({ onRestart }) => (
    <Stack spacing={4} direction="column">
        <Typography align="center" variant="h5">
            Error
        </Typography>

        <Alert severity="error">
            Uh oh, something went wrong. Please try again later.
        </Alert>

        <Navigation
            renderLeftButton={
                <Button variant="contained" onClick={onRestart}>
                    Restart
                </Button>
            }
        ></Navigation>
    </Stack>
);
