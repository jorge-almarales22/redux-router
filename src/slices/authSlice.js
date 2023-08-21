import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        email: null,
        uid: null,
        auth: false
    },
    reducers: {
        login: (state, {payload} ) => {
            state.name = payload.name
            state.email = payload.email
            state.uid = payload.uid
            state.auth = true
        },
        logout: (state) => {
            state.name = null
            state.email = null
            state.uid = null
            state.auth = false
        }
    }
});

export const { login, logout } = authSlice.actions;