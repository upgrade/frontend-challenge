import React from 'react';
import { Button, Typography, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const Confirmation = ({ user, onBack, onSubmit }) => {
    const handleBack = () => {
        onBack();
    };
    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <Stack spacing={2} direction="column">
            <Typography align="center" variant="h5">
                Confirmation
            </Typography>

            <Typography variant="h6">First Name: {user?.name} </Typography>
            <Typography variant="h6">E-Mail: {user?.email} </Typography>
            <Typography variant="h6">
                Password: {user?.password.replace(/./g, '*')}
            </Typography>
            <Typography variant="h6">Favorite color: {user?.color}</Typography>
            <Typography variant="h6">
                Terms and conditions: {user?.terms ? 'Agrees' : 'Not Agrees'}
            </Typography>

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
