import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const accessTokenApi = createApi({
    reducerPath: 'accessTokenApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({
        getAccessToken: builder.query({
            query: (): any => '/getAccessToken'
        }) 
    })
})

export const {useGetAccessTokenQuery} = accessTokenApi