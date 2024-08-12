import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserLoggedState {
    logged: boolean;
    authToken: string;
    emailUser: string;
}

const initialState: UserLoggedState = {
    logged: false,
    authToken: "",
    emailUser: "",
}

const userLoggedSlice = createSlice({
    name: 'user-logged',
    initialState: initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<{emailUser: string; authToken: string;}>) => {

            state.logged = true;
            state.authToken = action.payload.authToken;
            state.emailUser = action.payload.emailUser;
        },

        userLogout: (state) => {
            state.logged = false;
            state.authToken = ''
            state.emailUser = ''
        }
    }
})

export const { userLogin, userLogout} = userLoggedSlice.actions;
export default userLoggedSlice.reducer