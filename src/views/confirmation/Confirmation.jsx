import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const Confirmation = ({ onBack, onSubmit }) => {
    const handleBack = () => {
        onBack();
    };
    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <Stack spacing={4} direction="column">
            <Typography variant="h5">Confirmation</Typography>
            <Navigation
                renderLeftButton={
                    <Button variant="contained" onClick={handleBack}>
                        Back
                    </Button>
                }
                renderRightButton={
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                }
            ></Navigation>
        </Stack>
    );
};
