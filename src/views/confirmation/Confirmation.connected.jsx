import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { Confirmation } from './Confirmation';
import { useSubmitApi } from '../../hooks';

export const ConfirmationConnected = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const { post, error, success, isFetching } = useSubmitApi();

    const handleSubmit = () => {
        post(user);
    };

    const handleBack = () => {
        navigate('/moreInfo');
    };

    useEffect(() => {
        if (success) {
            navigate('/success');
        } else if (error) {
            navigate('/error');
        }
    }, [success, error, navigate]);

    return (
        <>
            {isFetching ? (
                <CircularProgress />
            ) : (
                <Confirmation
                    user={user}
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                />
            )}
        </>
    );
};
