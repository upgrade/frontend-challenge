import React, { useState } from 'react';
import { Button, Typography, TextField, Stack } from '@mui/material';

import { Navigation } from '../../components';

const initialFormValues = {
    name: '',
    email: '',
    password: '',
};

const inputFieldValues = [
    {
        name: 'name',
        label: 'First Name',
        id: 'name',
    },
    {
        name: 'email',
        label: 'Email',
        id: 'email',
    },
    {
        name: 'password',
        label: 'Password',
        id: 'password',
        type: 'password',
    },
];

export const SignUp = ({ onNext }) => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ('name' in fieldValues) {
            temp.name = fieldValues.name ? '' : 'This field is required.';
        }

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'This field is required.';
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(
                    fieldValues.email
                )
                    ? ''
                    : 'Email is not valid.';
        }

        if ('password' in fieldValues)
            temp.password = fieldValues.password
                ? ''
                : 'This field is required.';

        setErrors({
            ...temp,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('validate');
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleNext = () => {
        validate();
        if (isFormValid()) {
            onNext(values);
        }
    };

    // Look if every fields are filed and there is no errors
    const isFormValid = (fieldValues = values) => {
        const isValid =
            fieldValues.name &&
            fieldValues.email &&
            fieldValues.password &&
            Object.values(errors).every((x) => x === '');

        return isValid;
    };

    return (
        <Stack spacing={4} direction="column" width="300px">
            {/* title */}
            <Typography align="center" variant="h5">
                Signup
            </Typography>

            {/* input fields */}
            {inputFieldValues.map((inputFieldValue, index) => {
                return (
                    <TextField
                        key={index}
                        onBlur={handleChange}
                        onChange={handleChange}
                        name={inputFieldValue.name}
                        label={inputFieldValue.label}
                        autoComplete="none"
                        {...(inputFieldValue.type && {
                            type: inputFieldValue.type,
                        })}
                        {...(errors[inputFieldValue.name] && {
                            error: true,
                            helperText: errors[inputFieldValue.name],
                        })}
                    />
                );
            })}

            {/* navigation buttons */}
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
