import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoTagsHeaders = {
  "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
  "x-rapidapi-key": "09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216",
};

const baseUrl = "https://coinpaprika1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoTagsHeaders });

export const cryptoTagApi = createApi({
  reducerPath: "cryptoTagApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoTags: builder.query({
      query: () => createRequest("/tags"),
    }),
  }),
});

export const { useGetCryptoTagsQuery } = cryptoTagApi;
