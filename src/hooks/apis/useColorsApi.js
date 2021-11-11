import { useState, useEffect } from 'react';

const END_POINT = 'http://localhost:3001/api/colors';

// Caching data: We could use a useReducer or use react query
export const useColorsApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchColors = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(END_POINT, requestOptions);
        const data = await response.json();

        if (response.status !== 200) {
            setError(true);
        } else {
            setData(data);
        }
    };

    useEffect(() => {
        fetchColors();
    }, []);

    return {
        data,
        error,
    };
};
