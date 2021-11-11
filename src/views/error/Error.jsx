import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const Error = ({ onRestart }) => {
    return (
        <Stack spacing={4} direction="column">
            <Typography variant="h5">Error</Typography>
            <Navigation
                renderLeftButton={
                    <Button variant="contained" onClick={onRestart}>
                        Restart
                    </Button>
                }
            ></Navigation>
        </Stack>
    );
};
