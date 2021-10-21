import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoMiningHeaders = {
    'x-rapidapi-host': 'mineable-coins.p.rapidapi.com',
    'x-rapidapi-key': '09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216'
};

const baseUrl = "https://mineable-coins.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoMiningHeaders });

export const cryptoMiningApi = createApi({
    reducerPath: "cryptoMiningApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoMining: builder.query({
        query: () =>
          createRequest(
            "/coins"
          ),
      }),
    }),
  });


export const { useGetCryptoMiningQuery } = cryptoMiningApi;