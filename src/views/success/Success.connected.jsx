import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Success } from './Success';

export const SuccessConnected = () => {
    const navigate = useNavigate();

    const handleRestart = () => {
        navigate('/');
    };

    return <Success onRestart={handleRestart} />;
};
