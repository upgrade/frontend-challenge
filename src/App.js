import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';

import {
    SignUpConnected,
    ConfirmationConnected,
    ErrorConnected,
    MoreInfoConnected,
    SuccessConnected,
} from './views';

const theme = createTheme({});

export const App = () => {
    const RenderRoutes = () => (
        <Routes>
            <Route path="/" element={<SignUpConnected />} />
            <Route path="confirmation" element={<ConfirmationConnected />} />
            <Route path="moreInfo" element={<MoreInfoConnected />} />
            <Route path="success" element={<SuccessConnected />} />
            <Route path="*" element={<ErrorConnected />} />
        </Routes>
    );

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Box margin={'2rem'} display="flex">
                    <RenderRoutes />
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};
