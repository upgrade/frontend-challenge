import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Error } from './Error';

export const ErrorConnected = () => {
    const navigate = useNavigate();

    const handleRestart = () => {
        navigate('/');
    };

    return <Error onRestart={handleRestart} />;
};
