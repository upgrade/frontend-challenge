import React from 'react';
import { Button, Typography, Stack, Alert } from '@mui/material';

import { Navigation } from '../../components';

export const Success = ({ onRestart }) => (
    <Stack spacing={4} direction="column">
        <Typography align="center" variant="h5">
            Success!
        </Typography>

        <Alert severity="success">
            You should receive a confirmation email soon.
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
