import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const MoreInfo = ({ onNext, onBack }) => {
    const handleBack = () => {
        onBack();
    };
    const handleNext = () => {
        onNext();
    };

    return (
        <Stack spacing={4} direction="column">
            <Typography variant="h5">Aditionnal Info</Typography>
            <Navigation
                renderLeftButton={
                    <Button variant="contained" onClick={handleBack}>
                        Back
                    </Button>
                }
                renderRightButton={
                    <Button variant="contained" onClick={handleNext}>
                        Next
                    </Button>
                }
            ></Navigation>
        </Stack>
    );
};
