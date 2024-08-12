import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import  userLoggedReducer  from "./modules/LoginSlice";
import usersReducer from "./modules/UsersSlice"
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: localStorage,
}

const persistedReducer = persistReducer(persistConfig, userLoggedReducer )

export const store = configureStore({
    reducer: {
        userLogged: persistedReducer,
        users: usersReducer,
    }
})

export const persistor = persistStore(store);
export type GlobalState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;