import { useState } from 'react';

const END_POINT = 'http://localhost:3001/api/submit';

export const useSubmitApi = () => {
    const [error, setError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const [success, setSuccess] = useState(false);

    const post = async (userInfo) => {
        setIsFetching(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo),
        };
        const response = await fetch(END_POINT, requestOptions);

        if (response.status !== 200) {
            setError(true);
        } else {
            setSuccess(true);
        }
        setIsFetching(false);
    };

    return {
        error,
        success,
        isFetching,
        post,
    };
};
