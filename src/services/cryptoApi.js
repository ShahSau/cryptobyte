import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats'


const createRequest = (url)=> ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        }
        )
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi