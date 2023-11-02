import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUserStatus', async (params = '') => {
    try {
        const { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/users' + `${params}`,
        );
        console.log('FETCH PARAMS', params);
        console.log('FETCH USERS', data);
        return data;
    } catch (err) {
        console.error('fetchUsers FAILED: ', err);
        alert('Произошла ошибка получения списка пользователей');
    }
});

const initialState = {
    users: [],
    currentUser: null,
    status: '',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setCurrentUser(state, action) {
            state.currentUser = state.users.find((user) => user.id === action.payload);
        },
        setCurrentUserFromLink(state, action) {
            state.currentUser = state.users.find((user) => user.id === action.payload);
        },
        clearState(state) {
            state.currentUser = [];
            state.users = [];
            state.status = '';
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
                state.users = [];
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.status = 'success';
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'error';
                state.users = [];
            });
    },
});

export const { setUsers, setStatus, setCurrentUser, setCurrentUserFromLink, clearState } =
    usersSlice.actions;

export default usersSlice.reducer;
