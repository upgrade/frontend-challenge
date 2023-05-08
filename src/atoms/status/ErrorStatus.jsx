import React from 'react';
import Icon from '../icon/Icon';

export default function ErrorStatus() {
    return (
        <>
            <h1>Error</h1>
            <Icon type="error" />
            <p>
                Uh oh, something went wrong. Please try again.
            </p>
        </>
    )
}
