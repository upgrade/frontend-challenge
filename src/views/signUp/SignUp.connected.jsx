import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SignUp } from './SignUp';
import { updateUser } from '../../features/userSlice';

export const SignUpConnected = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNext = (userInfo) => {
        dispatch(updateUser(userInfo));
        navigate('/moreInfo');
    };

    return <SignUp onNext={handleNext} />;
};
