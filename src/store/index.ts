import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appPathSlice from "./appPathSlice/appPathSlice";
import accessTokenSlice from "./accessTokenSlice/accessTokenSlice";
import { accessTokenApi } from "../api/accessTokenApi";

const rootReducer = combineReducers({
    appPathSlice,
    accessTokenSlice,
    [accessTokenApi.reducerPath]: accessTokenApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accessTokenApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch