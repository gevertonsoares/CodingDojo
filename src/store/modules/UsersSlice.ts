import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    email: string;
    password: string;
    authToken: string;
}

interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

const usersSlice = createSlice ({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
    }
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer