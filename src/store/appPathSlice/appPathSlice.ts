import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type AppPathState = {
    defaultAppPath: string,
    customAppPath: string | null
}

const initialState: AppPathState = {
    defaultAppPath: '/music/discover',
    customAppPath: window.sessionStorage.getItem(`path`) || null
}

const appPathSlice = createSlice({
    name: 'appPathSlice',
    initialState,
    reducers: {
        setCustomPath: (state, action: PayloadAction<string>) => {
            state.customAppPath = action.payload
        }
    }
})

export const { setCustomPath } = appPathSlice.actions

export default appPathSlice.reducer;

