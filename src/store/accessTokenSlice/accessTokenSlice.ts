import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accessTokenApi } from "../../api/accessTokenApi";


type AppPathState = {
    token: string | null,
    tokenError: boolean
}

const initialState: AppPathState = {
    token: null,
    tokenError: false
}

const accessTokenSlice = createSlice({
    name: 'accessTokenSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(accessTokenApi.endpoints.getAccessToken.matchFulfilled, (state, action: PayloadAction<any>) => {
            state.token = action.payload.token
            state.tokenError = false
        }),
        builder.addMatcher(accessTokenApi.endpoints.getAccessToken.matchRejected, (state) => {
            state.tokenError = true
        })
    }
})

export default accessTokenSlice.reducer;

