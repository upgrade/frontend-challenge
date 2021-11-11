import React, { useState } from 'react';
import { Button, Typography, TextField, Stack } from '@mui/material';

import { Navigation } from '../../components';

export const SignUp = ({ onNext }) => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const validateEmail = () => {
        // /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleNext = () => {
        console.log('next clicked');
        // TODO:
        onNext();
    };

    const RenderNameField = () => (
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="First Name"
        />
    );

    const RenderEmailField = () => (
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email"
        />
    );

    const RenderPasswordField = () => (
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Password"
        />
    );

    return (
        <Stack spacing={4} direction="column">
            <Typography variant="h5">Signup</Typography>
            <RenderNameField />
            <RenderEmailField />
            <RenderPasswordField />
            <Navigation
                renderLeftButton={
                    <Button variant="contained" onClick={handleNext}>
                        Next
                    </Button>
                }
            ></Navigation>
        </Stack>
    );
};
