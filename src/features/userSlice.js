import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    password: '',
    color: '',
    terms: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
