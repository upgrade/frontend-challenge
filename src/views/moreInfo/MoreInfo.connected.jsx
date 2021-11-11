import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MoreInfo } from './MoreInfo';

export const MoreInfoConnected = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/confirmation');
    };

    const handleBack = () => {
        navigate('/');
    };

    return <MoreInfo onNext={handleNext} onBack={handleBack} />;
};
