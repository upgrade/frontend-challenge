import React from 'react';
import Icon from '../icon/Icon';

export default function SuccessStatus() {
    return (
        <>
            <h1>Success!</h1>
            <Icon type="success" />
            <p>
                You should receive a confirmation email soon.
            </p>
        </>
    )
}
