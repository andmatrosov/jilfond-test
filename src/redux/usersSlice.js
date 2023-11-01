import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUserStatus', async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data;
    } catch (err) {
        console.error('fetchUsers FAILED: ', err);
    }
});

const initialState = {
    users: [],
    currentUser: null,
    search: [],
    status: 'loading',
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
        setCurrentUser(state, action) {
            console.log('REDUCER', action.payload);
            state.currentUser = state.users.find((user) => user.id === action.payload);
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

export const { setItems, setSearch, setCurrentUser } = usersSlice.actions;

export const selectFilteredUsers = (state) => {
    const { users, search } = state;

    if (!search.length) {
        return [];
    }

    const searchUsers = () => {
        let resulSearch = [];
        if (typeof search[0] === 'number') {
            resulSearch = users.filter((user) => search.includes(user.id));
        } else {
            resulSearch = users.filter((user) =>
                search.some((substring) => user.name.toLowerCase().includes(substring)),
            );
        }

        return resulSearch;
    };

    return searchUsers();
};

export default usersSlice.reducer;
