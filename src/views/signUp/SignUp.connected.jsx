import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUp } from './SignUp';

export const SignUpConnected = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/moreInfo');
    };

    return <SignUp onNext={handleNext} />;
};
