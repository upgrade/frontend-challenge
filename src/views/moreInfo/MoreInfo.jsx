import React, { useState } from 'react';
import {
    Button,
    Typography,
    Stack,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormHelperText,
} from '@mui/material';

import { Navigation } from '../../components';

export const MoreInfo = ({ colors, onNext, onBack }) => {
    const [color, setColor] = useState(null);
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState({ checkbox: false, select: false });

    const validate = () => {
        if (!checked) {
            setErrors((prev) => ({ ...prev, checkbox: true }));
        }

        if (!color) {
            setErrors((prev) => ({ ...prev, select: true }));
        }
    };

    const handleBack = () => {
        onBack();
    };
    const handleNext = () => {
        validate();
        if (color && checked) {
            onNext(color, checked);
        }
    };

    const handleSelectChange = (event) => {
        setErrors((prev) => ({ ...prev, select: false }));
        setColor(event.target.value);
    };

    const handleCheckBoxChange = (event) => {
        setErrors((prev) => ({ ...prev, checkbox: false }));
        setChecked(event.target.checked);
    };

    return (
        <Stack spacing={4} direction="column">
            {/* title */}
            <Typography align="center" variant="h5">
                Aditionnal Info
            </Typography>

            {/* select color */}
            <FormControl sx={{ m: 1, minWidth: 500 }} error={errors.select}>
                <InputLabel id="select">Select your favorite color</InputLabel>
                <Select
                    id="color-select"
                    value={color}
                    label="color"
                    onChange={handleSelectChange}
                >
                    {colors &&
                        colors.map((color) => (
                            <MenuItem key={color} value={color}>
                                {color}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

            {/* checkbox */}
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleCheckBoxChange}
                        />
                    }
                    label="I agree to terms and conditions"
                />
                <FormHelperText>{errors.checkbox && 'Error'}</FormHelperText>
            </FormGroup>

            {/* navigation */}
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
