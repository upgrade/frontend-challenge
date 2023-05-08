import React from 'react';
import { types } from './types';

export default function Icon({ type }) {
    if (!types || !types[type]) {
        return null;
    }

    const { getContent } = types[type];

    return (
        <>
            {getContent()}
        </>
    );
}