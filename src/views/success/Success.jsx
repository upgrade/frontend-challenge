import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const Success = ({ onRetart }) => {
    return (
        <Stack spacing={4} direction="column">
            <Typography variant="h5">Success</Typography>
            <Navigation
                renderLeftButton={
                    <Button variant="contained" onClick={onRetart}>
                        Restart
                    </Button>
                }
            ></Navigation>
        </Stack>
    );
};
