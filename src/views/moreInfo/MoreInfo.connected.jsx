import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { MoreInfo } from './MoreInfo';
import { useColorsApi } from '../../hooks';
import { updateUser } from '../../features/userSlice';

export const MoreInfoConnected = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: colors, error } = useColorsApi();

    const handleNext = (color, isTermAccepted) => {
        dispatch(updateUser({ color: color, terms: isTermAccepted }));
        navigate('/confirmation');
    };

    const handleBack = () => {
        navigate('/');
    };

    useEffect(() => {
        error && navigate('/error');
    }, [error, navigate]);

    return (
        <>
            {!colors ? (
                <CircularProgress />
            ) : (
                <MoreInfo
                    colors={colors}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
        </>
    );
};
