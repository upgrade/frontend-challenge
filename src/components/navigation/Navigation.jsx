import React from 'react';
import { Stack } from '@mui/material';

export const Navigation = ({ renderRightButton, renderLeftButton }) => {
    return (
        <Stack spacing={2} direction="row">
            {renderLeftButton && renderLeftButton}
            {renderRightButton && renderRightButton}
        </Stack>
    );
};
