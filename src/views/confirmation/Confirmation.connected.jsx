import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Confirmation } from './Confirmation';

export const ConfirmationConnected = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/success');
    };

    const handleBack = () => {
        navigate('/moreInfo');
    };

    return <Confirmation onBack={handleBack} onSubmit={handleSubmit} />;
};
